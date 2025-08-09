import React from "react";
import myImg from "./images/img 4.jpeg";
// import myCV from "../assets/files/full stack developer ai focused.pdf";

const Description = ({ learnMoreClick }) => {
  return (
    <div className="xl:my-5 mt-16 xl:mt-20 h-auto xl:grid-cols-2 grid w-full">
      <div className="place-content-center mt-10 xl:place-items-start place-items-center">
        <h1 className="text-4xl font-bold">Hi, I am</h1>
        <div className="text-4xl sm:flex sm:space-x-3 font-bold sm:place-content-start place-items-center">
          <h1>Muhammad</h1>
          <h1>Musab</h1>
        </div>
        <p className="opacity-60 mt-3">Full Stack Developer (AI focued)</p>
        <div className="py-4 space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1rX6ojawHKkWDZCR2yoBUUhVXRrGaLIxb/view?usp=sharing"
          >
            <button className="bg-[#27AE60] p-1 px-4 hover:bg-green-700">
              Preview Resume
            </button>
          </a>
          <button
            className="border p-1 px-4 hover:bg-neutral-700"
            onClick={learnMoreClick}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="w-auto pt-10 xl:place-items-end place-items-center">
        <img
          className="h-64 shadow-[0_0_35px_5px_#000000] xl:rounded-full rounded-sm w-auto "
          src={myImg}
          alt="description"
        />
      </div>
    </div>
  );
};

export default Description;
