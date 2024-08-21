import React, { useRef, useState } from "react";
import LoginNav from "./LoginNav";
import "../row.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      inputRef.current.focus();
    } else {
      nav("/home");
    }
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
        <LoginNav />
        <div className="text-white text-center mt-20 w-[70%] md:w-[510px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">
            Unlimited movies, TV shows, and more{" "}
          </h1>
          <p className="my-4 text-base md:text-lg font-semibold">
            {" "}
            Starts at USD 2.99. Cancel anytime.
          </p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form
            className="mt-4 h-[40px] md:h-[60px] flex"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              value={inputValue}
              onChange={handleChange}
              ref={inputRef}
              placeholder="Email Address"
              className="h-full w-[68%] mr-2 rounded-md text-white bg-transparent border border-gray-400 pl-4 font-semibold mail-input"
            />
            <button
              type="submit"
              className="bg-red-600 border border-red-600  h-full w-[30%] rounded-md text-sm md:text-xl font-bold hover:bg-red-700 hover:border-red-700 "
            >
              {" "}
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
