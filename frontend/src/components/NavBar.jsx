import React, { useEffect, useState } from "react";
import { TbAlignRight } from "react-icons/tb";
import myImg from "./images/img 5.jpeg";

const NavBar = ({ children, getInTouch }) => {
  return (
    <div className="fixed right-0 left-0 p-5 z-50 backdrop-blur-sm">
      <div className="flex flex-row justify-evenly">
        <div className="flex space-x-2">
          <img className="rounded-md h-10 w-10" src={myImg} alt="description" />
          <h3 className="text-2xl">Musab</h3>
        </div>
        {children}
        <div>
          <button
            className="text-black rounded-lg p-2 px-4 bg-[#8CFF00]"
            onClick={getInTouch}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

export function DesktopIcon({ aboutClick, servicesClick, contactClick }) {
  return (
    <div className="flex flex-row space-x-16">
      <div className="pt-2 flex text-white/75 space-x-10">
        <ul>
          <button
            className="hover:text-white hover:scale-105"
            onClick={aboutClick}
          >
            About
          </button>
        </ul>
        <ul>
          <button
            className="hover:text-white hover:scale-105"
            onClick={servicesClick}
          >
            Services
          </button>
        </ul>
        <ul>
          <button
            className="hover:text-white hover:scale-105"
            onClick={contactClick}
          >
            Testimonials
          </button>
        </ul>
        <ul>
          <button
            className="hover:text-white hover:scale-105"
            onClick={contactClick}
          >
            FAQs
          </button>
        </ul>
      </div>
    </div>
  );
}

export function MobileIcon({ onClick }) {
  return (
    <button
      className="size-9 rounded-md place-items-center hover:bg-neutral-700"
      onClick={onClick}
    >
      <TbAlignRight className="size-7" />
    </button>
  );
}
