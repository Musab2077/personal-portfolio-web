import React from "react";

const Description = ({ learnMoreClick }) => {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex justify-center blur-3xl">
          <div
            className="h-32 w-44 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(20,184,166,0.5) 100%, rgba(20,184,166,0.6) 20%, transparent 70%)",
              boxShadow:
                "0 0 80px rgba(20,184,166,0.9), 0 0 120px rgba(20,184,166,0.7), 0 0 160px rgba(20,184,166,0.5), 0 0 200px rgba(20,184,166,0.3)",
              filter: "blur(4px)",
            }}
          ></div>
        </div>
        <img
          decoding="auto"
          src="https://framerusercontent.com/images/eVPQSYBoVqwchmpN78sjyYtovY.svg,https://framerusercontent.com/images/eVPQSYBoVqwchmpN78sjyYtovY.svg"
          alt="Grid"
          className="absolute bg-[#022322] inset-0 m-auto w-full max-w-5xl opacity-40"
          style={{
            bottom: "50%",
            maskImage:
              "radial-gradient(circle at center top, black 55%, transparent 0%)",
            WebkitMaskImage:
              "radial-gradient(circle at center top, black 55%, transparent 75%)",
            filter:
              "drop-shadow(0 0 80px rgba(20,184,166,0.6)) drop-shadow(0 0 40px rgba(20,184,166,0.4))",
          }}
        ></img>
        <div className="mt-24 inset-0 ">
          <div data-aos="fade-up" className=" h-auto w-full">
            <div className="mt-10 place-items-center">
              <div className="text-4xl text-center font-bold font-serif">
                <h1>Real Problems</h1>
                <h1>
                  <span>' </span>
                  <span className="text-[#24ff03]">
                    Intelligent AI. Automated Solutions. End-to-End Apps
                  </span>
                  <span> '</span>
                </h1>
              </div>
              <p className="opacity-60 mt-3">
                Full Stack Developer (AI focued)
              </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
