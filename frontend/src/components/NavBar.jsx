import React, { useEffect, useState } from "react";
import { TbAlignRight } from "react-icons/tb";

const NavBar = ({ children }) => {
  // const handleSideButton = () => {
  //   console.log("hello");
  // };

  return (
    <div className="fixed right-0 left-0 p-5 border-b-2 z-50 backdrop-blur-xl border-b-neutral-700 shadow-[0_0_20px_3px_#000000] bg-neutral-800/65">
      <div className="flex flex-row justify-between">
        <h3 className="text-2xl">Musab</h3>
        {children}
      </div>
    </div>
  );
};

export default NavBar;

export function DesktopIcon({ aboutClick, servicesClick, contactClick }) {
  return (
    <div className="flex flex-row space-x-16">
      <ul>
        <button
          className="hover:underline hover:scale-105"
          onClick={aboutClick}
        >
          About
        </button>
      </ul>
      <ul>
        <button
          className="hover:underline hover:scale-105"
          onClick={servicesClick}
        >
          Services
        </button>
      </ul>
      <ul>
        <button
          className="hover:underline hover:scale-105"
          onClick={contactClick}
        >
          Contact
        </button>
      </ul>
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
