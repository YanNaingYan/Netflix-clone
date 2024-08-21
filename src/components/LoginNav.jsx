import React from "react";
import netflix from "../img/netflix-text.png";
import { useNavigate } from "react-router-dom";
const LoginNav = () => {
  const nav = useNavigate();
  const handleSignIn = () => {
    nav("/signUp");
  };
  return (
    <div className="w-full">
      <div
        className={`px-6 md:px-28 top-0 flex justify-between items-center h-[150px] z-10 w-full p-5 transition-all ease-in duration-500 
        bg-transparent select-none
        `}
      >
        <img
          src={netflix}
          alt=""
          className="w-[140px] md:w-[200px] h-[140px]  left-5   "
        />
        <button
          onClick={handleSignIn}
          className="bg-red-600 hover:bg-red-800 text-white py-1 px-3 w-[75.99px] rounded-md "
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginNav;
