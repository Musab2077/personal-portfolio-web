import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SideBar = ({ onClick, aboutClick, servicesClick }) => {
  const navArray = ["About", "Services", "Contact"];
  const navigate = useNavigate();

  return (
    <div className="place-items-end fixed right-0 top-0 z-10 animate-slide-in-right">
      <div className="py-3 text-white w-52 max-h-full min-h-screen bg-black/90 backdrop-blur-sm border-l border-l-neutral-700">
        <div className="m-3 text-right">
          <button
            className="hover:bg-neutral-700 p-1 rounded-md"
            onClick={onClick}
          >
            <RxCross2 className="size-5" />
          </button>
        </div>
        <ul
          className="border-y-neutral-700 border-x-0 border cursor-pointer p-3 hover:bg-neutral-700"
          onClick={aboutClick}
        >
          <button className="hover:underline">
            <a href="#about">{navArray[0]}</a>
          </button>
        </ul>
        <ul
          className="border-y-neutral-700 border-x-0 border cursor-pointer p-3 hover:bg-neutral-700"
          onClick={servicesClick}
        >
          <button className="hover:underline">
            <a href="#services">{navArray[1]}</a>
          </button>
        </ul>
        <ul className="border-y-neutral-700 border-x-0 border cursor-pointer p-3 hover:bg-neutral-700" onClick={()=> navigate("/contact")}>
          <button className="hover:underline">
            <a href="/contact">{navArray[2]}</a>
          </button>
        </ul>
        <div className="flex justify-around mt-3 text-xl text-[#27AE60]">
          <ul className="hover:text-green-700 hover:scale-110">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/muhammad-musab-37a2312a5/"
            >
              <FaLinkedin />
            </a>
          </ul>
          <ul className="hover:text-green-700 hover:scale-110">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.upwork.com/freelancers/~01effcbb73f85bc357"
            >
              <FaSquareUpwork />
            </a>
          </ul>
          <ul className="hover:text-green-700 hover:scale-110">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://github.com/Musab2077"
            >
              <FaGithub />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
