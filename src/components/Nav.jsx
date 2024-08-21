import React, { useEffect, useState } from "react";
import netflix from "../img/netflix-text.png";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
const Nav = ({ children }) => {
  const nav = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleLogout = () => {
    nav("/");
  };

  return (
    <div>
      <div
        className={`fixed top-0 flex justify-between items-center h-[80px] z-10 w-full p-5 transition-all ease-in duration-500 ${
          show && "bg-[rgb(17,17,17)]"
        }  `}
      >
        <img
          src={netflix}
          alt=""
          className="w-[120px] md:w-[180px]  fixed left-5 object-contain text-center select-none"
        />
        <div className=" fixed right-5 object-contain">
          <DropdownMenu>
            <DropdownMenuTrigger className="select-none">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt=""
                className="w-[30px]"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[10px] md:w-[20px] right-3 fixed -top-4  pl-8 py-2 mr-4 bg-[rgb(51,51,51,0.5)] rounded-md hover:bg-[rgb(230,230,230)] hover:text-black   text-white font-bold "
              onClick={handleLogout}
            >
              Log Out
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Nav;
