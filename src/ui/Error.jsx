/* eslint-disable react/prop-types */

import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Error = ({ errorMessage }) => {
    const navigate = useNavigate()
  return (
    <div className="grid grid-row-2 space-y-3 justify-center items-end mt-72 space-x-9">
      <div className=" text-center">
        <h1>{errorMessage}</h1>
        
      </div>
      <span className="cursor-pointer text-blue-500 flex space-x-8" onClick={()=>navigate('/')}>
        <AiOutlineArrowLeft className="m-1 "   />
        Back
      </span>
    </div>
  );
};

export default Error;
