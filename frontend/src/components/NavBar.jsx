import React, { useEffect, useState } from "react";
import { TbAlignRight } from "react-icons/tb";
import myImg from "./images/img 5.jpeg";
import { useNavigate } from "react-router-dom";

const NavBar = ({ children, getInTouch, stretcOnSmDevice }) => {
  const navigate = useNavigate();
    
  return (
    <div className="px-3 bg-fixed fixed right-0 left-0 p-5 z-50 backdrop-blur-sm">
      <div
        className={`flex flex-row ${stretcOnSmDevice ? "justify-evenly" : "px-3 justify-between"}`}
      >
        <div className="flex space-x-2 cursor-pointer" onClick={()=> navigate("/")}>
          <img className="rounded-md h-10 w-10" src={myImg} alt="description" />
          <h3 className="text-2xl text-white">Musab</h3>
        </div>
        {children}
        {getInTouch}
      </div>
    </div>
  );
};

export default NavBar;

export function DesktopIcon() {
  return (
    <div className="flex flex-row space-x-16">
      <div className="pt-2 flex text-white/75 space-x-10">
        <ul>
          <button className="hover:text-white hover:scale-105">
            <a href="#about">About</a>
          </button>
        </ul>
        <ul>
          <button className="hover:text-white hover:scale-105">
            <a href="#services">Services</a>
          </button>
        </ul>
        <ul>
          <button
            className="hover:text-white hover:scale-105"
          >
            <a href="#testimonials">Testimonials</a>
          </button>
        </ul>
        <ul>
          <button className="hover:text-white hover:scale-105">
            <a href="#faqs">FAQs</a>
          </button>
        </ul>
      </div>
    </div>
  );
}

export function MobileIcon({ onClick }) {
  // console.log(onClick);
  return (
    <button
      className="size-9 rounded-md place-items-center hover:bg-neutral-700"
      onClick={onClick}
    >
      <TbAlignRight className="size-7 text-white" />
    </button>
  );
}
