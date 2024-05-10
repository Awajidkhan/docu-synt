import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeText, setActiveText] = useState("Home");
  const navigate = useNavigate();
  const handleMouseEnter = (text) => {
    setActiveText(text);
  };

  const handleClick = (text) => {
    setActiveText(text);
  };

  useEffect(() => {
    // You can perform any actions here when activeText changes
  }, [activeText]);

  return (
    <div className="bg-[#222] py-[28px]">
      <div className="container-class ">
        <div className="flex items-center justify-between">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
            >
              <path
                d="M44.5017 22.9986C44.5017 29.142 42.0107 34.706 37.9858 38.7336C33.9583 42.7585 28.3942 45.2495 22.2509 45.2495H16.0341C15.9389 45.1978 12.8659 43.4873 8.03337 29.966C5.36283 22.4955 0 0.750488 0 0.750488H22.2509C34.5402 0.750488 44.5017 10.712 44.5017 22.9986Z"
                fill="#004862"
              />
              <path
                d="M14.2583 33.2471C10.8073 38.3054 15.9145 45.0905 16.0341 45.2483C15.9389 45.1993 12.8659 43.4887 8.03338 29.9674C5.36284 22.497 0 0.751953 0 0.751953L26.0038 28.7627C26.0038 28.7627 18.1744 27.5063 14.2583 33.2471Z"
                fill="#00D588"
              />
            </svg>
          </div>
          <div className="flex items-center gap-[50px]">
            <p
              className={`text-white text-[18px] font-normal capitalize cursor-pointer ${
                activeText === "Home" ? "hover:text-[#00D588]" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("Home")}
              onClick={() => {
                handleClick("Home");
                navigate("/");
              }}
            >
              Home
            </p>
            <p
              className={`text-white text-[18px] font-normal capitalize cursor-pointer ${
                activeText === "About" ? "hover:text-[#00D588]" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("About")}
              onClick={() => {
                handleClick("About");
                navigate("/about");
              }}
            >
              About
            </p>
            <p
              className={`text-white text-[18px] font-normal capitalize  cursor-pointer ${
                activeText === "Solution" ? "hover:text-[#00D588]" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("Solution")}
              onClick={() => {
                handleClick("Solution");
                navigate("/solution");
              }}
            >
              Solution
            </p>
            <p
              className={`text-white text-[18px] font-normal capitalize cursor-pointer ${
                activeText === "Contact" ? "hover:text-[#00D588]" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("Contact")}
              onClick={() => handleClick("Contact")}
            >
              Contact
            </p>
          </div>
          <div>
            <button
              type="button"
              className="text-[#004862] bg-[#00D588] py-[8px] px-[32px] font-[400] rounded-[6px] text-[16px]"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
