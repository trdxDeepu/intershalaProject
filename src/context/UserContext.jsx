/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://gist.githubusercontent.com/trdxlucifer/0ef53c85397a74e85c9cec930093bf98/raw/9c7d860c1f7ed647290b16cb3ada4c4146165adb/CAdata.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUserData(data);
        console.log(data)
        setIsLoading(false); // Set isLoading to false when data is loaded
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }

  return (
    <UserContext.Provider value={{ userData }}>
      {children}
    </UserContext.Provider>
  );
};
