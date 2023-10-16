import { useState, useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const RandomSuggestion = () => {
  const { userData } = useUserContext();
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    if (userData.length > 0) {
      const numberOfRandomUsers = 3;
      const randomUserIndices = [];

      // Generate random indices to select users
      while (randomUserIndices.length < numberOfRandomUsers) {
        const randomIndex = Math.floor(Math.random() * userData.length);
        if (!randomUserIndices.includes(randomIndex)) {
          randomUserIndices.push(randomIndex);
        }
      }

      // Get random user data
      const randomUserData = randomUserIndices.map((index) => userData[index]);

      setRandomUsers(randomUserData);
    }
  }, [userData]);

  return (
    <div className="flex flex-row justify-between ">
      {randomUsers.length > 0 &&
        randomUsers.map((user, index) => (
          <div key={index} className="w-1/3 p-4">
            <div className="shadow-md bg-white rounded-lg overflow-hidden">
              <img
                src={user.image}
                alt={`User ${user.id}`}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-bold">{user.name}</p>
                <p className="text-right text-xl font-bold">₹{user.price}</p>
                <p className="text-gray-500">{user.description}</p>
                <div className="flex items-center mt-4">
                  {/* image where images are broken its show  some image which are  broken */}
                  <img
                    src={user.image}
                    className="h-8 w-8 object-cover rounded-full"
                    alt={`User ${user.id}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "src/assets/image 1.png";
                    }}
                  />

                  <div className="ml-2">
                    <div className="text-sm font-medium text-gray-900">
                      {user.rating}
                    </div>
                    <div className="text-xs font-medium text-gray-600">
                      ({user.reviews} reviews)
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-[#0076ce] flex flex-col justify-center w-full h-8 items-center rounded-lg">
                <div
                  id="Text1"
                  className="text-center font-['Poppins'] font-bold leading-[26px] text-white"
                >
                  <Link to={`/details/${user.id}`}>View services</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RandomSuggestion;
