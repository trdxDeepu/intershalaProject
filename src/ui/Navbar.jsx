import Logo from "../assets/image 1.png";
import { BiChevronDown } from "react-icons/bi";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="py-4 flex flex-col md:flex-row md:items-center md:justify-evenly">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="text-md font-bold flex space-x-4 md:space-x-12">
          <li className="flex items-center">
            Solutions{" "}
            <span className="text-blue-600">
              <BiChevronDown />
            </span>
          </li>
          <li className="flex items-center">
            Features{" "}
            <span className="text-blue-600">
              <BiChevronDown />
            </span>
          </li>
          <li className="flex items-center">Blogs </li>
          <li className="flex items-center">
            About{" "}
            <span className="text-blue-600">
              <BiChevronDown />
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-4 md:mt-0 flex space-x-6">
        <Button text="Login" filled={false} />
        <Button text="Register" filled={true} />
      </div>
    </nav>
  );
};

export default Navbar;
