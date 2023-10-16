import  { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const SearchBar = () => {
  const { userData } = useUserContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    function filterData() {
      const filteredDataUser = userData.filter((item) => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setFilteredData(filteredDataUser);
    }
    filterData();
  }, [userData, searchQuery]);

  console.log(filteredData);

  const handleSearch = (userId) => {
    // Matching the userId to navigate to page of userDetails 

    const user = userData.find((item) => item.id === userId);
    console.log(user)
    if (user) {
      navigate(`/details/${userId}`,{ state: { user } });
    } else {
      // User not found, navigate to the error page
      navigate("/error");
    }
  };

  return (
    <>
      <div className="border-solid border-[#bfbfbf] bg-white flex flex-row justify-between pl-8 items-center border rounded-lg">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleChange}
          className="border-none font-bold text-[#aeb0b4] bg-transparent focus:outline-none"
        />
        <div className="bg-[#0076ce] self-start flex flex-col justify-center h-20 items-center my-0 rounded-lg">
          <button
            onClick={() =>
              handleSearch(
                filteredData.length === 1 ? filteredData[0].id : null
              )
            }
            className="text-center font-['Inter'] font-bold text-white mx-16"
          >
            Search
          </button>
        </div>
      </div>
      {searchQuery && (
  <div>
    {filteredData
      .filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((item) => (
        <ul
          key={item.id}
          className="cursor-pointer max-w-md mx-auto overflow-hidden shadow-lg hover:text-gray-500"
          onClick={()=>handleSearch(item.id)} 
        >
          <p className="bg-white p-4">{item.name}</p>
        </ul>
      ))}
  </div>
)}

    </>
  );
};

export default SearchBar;
