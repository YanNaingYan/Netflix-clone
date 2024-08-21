import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflix from "../img/netflix-text.png";
import "../row.css";
const SignUp = () => {
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const emailRef = useRef();
  const passRef = useRef();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "" && passValue === "") {
    } else if (inputValue === "") {
      emailRef.current.focus();
    } else if (passValue === "") {
      passRef.current.focus();
    } else {
      nav("/home");
    }
  };
  const handleBack = () => {
    nav("/");
  };
  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage: `url(
        "https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/1e2b45b3-0872-495f-913d-ab823327b757/MM-en-20240819-TRIFECTA-perspective_WEB_bc379dc8-b1b0-471a-9aa3-9657eca805e4_large.jpg"
      )`,
      }}
    >
      <div className="bg-gradient-to-b from-black/50 to-black/70 w-full h-full">
        <div
          className={`px-12 md:px-28 top-0 flex justify-between items-center h-[150px] z-10 w-full p-5 transition-all ease-in duration-500 
        bg-transparent select-none
        `}
        >
          <img
            src={netflix}
            alt=""
            className="w-[150px] md:w-[200px] h-[140px]  left-5   "
          />
        </div>
        <div className="w-[80%] md:w-[500px] bg-gradient-to-b from-black/50 to-black/70 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="w-[80%] md:w-[350px]  text-white mx-auto select-none"
          >
            <h1 className="pt-8 text-3xl font-bold mb-8">Sign In</h1>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputValue}
              ref={emailRef}
              placeholder="Email Address"
              className="h-[60px] mx-auto w-full mr-2 rounded-md text-white bg-transparent border border-gray-400 pl-4 font-semibold mail-input mb-4"
            />
            <input
              type="password"
              name="password"
              onChange={handlePassChange}
              value={passValue}
              ref={passRef}
              placeholder="Password"
              className="h-[60px] mx-auto w-full mr-2 rounded-md text-white bg-transparent border border-gray-400 pl-4 font-semibold mail-input mb-4"
            />
            <button
              type="submit"
              className="mb-4 h-[50px] bg-red-600 hover:bg-red-800 text-white py-1 px-3 w-full rounded-md "
            >
              Sign In
            </button>
            <p className="mb-4">
              <input type="checkbox" name="" className="mr-1 " /> Remember me
            </p>
            <p className="pb-4">
              Already have an account?{" "}
              <a
                onClick={handleBack}
                className=" text-blue-500 cursor-pointer hover:text-blue-600"
              >
                Click here.
              </a>
            </p>
            <p className="text-sm text-gray-400 pb-8">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
