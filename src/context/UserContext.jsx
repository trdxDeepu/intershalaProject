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
        const res = await fetch("http://localhost:5174/src/CA.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUserData(data);
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
