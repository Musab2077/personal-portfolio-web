import React from "react";

const Description = ({ learnMoreClick }) => {
  return (
    <>
      <div className="px-3 relative w-full h-full overflow-hidden pb-5">
        <div className="relative inset-0 z-0 pointer-events-none">
          {/* Glow */}
          <div className="flex justify-center blur-3xl">
            <div
              className="
              rounded-full
              w-28 h-16
              sm:w-32 sm:h-20
              md:w-40 md:h-24
              lg:w-44 lg:h-28
            "
              style={{
                background:
                  "radial-gradient(circle, rgba(20,184,166,0.5) 20%, rgba(20,184,166,0.35) 45%, transparent 70%)",
                boxShadow: `
                  0 0 40px rgba(20,184,166,0.5),
                  0 0 70px rgba(20,184,166,0.4),
                  0 0 110px rgba(20,184,166,0.3)
                `,
                filter: "blur(3px)",
              }}
            />
          </div>

          {/* Grid Image */}
          <img
            src="https://framerusercontent.com/images/eVPQSYBoVqwchmpN78sjyYtovY.svg"
            alt="Grid background"
            className="absolute inset-0 w-full opacity-40"
            style={{
              maskImage:
                "radial-gradient(circle at center top, black 55%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center top, black 55%, transparent 75%)",
              filter:
                "drop-shadow(0 0 80px rgba(20,184,166,0.6)) drop-shadow(0 0 40px rgba(20,184,166,0.4))",
            }}
          />
        </div>
        <div className="mt-24 inset-0 ">
          <div data-aos="fade-up" className=" h-auto w-full">
            <div className="mt-10 place-items-center">
              <div className="text-3xl lg:text-5xl text-center font-bold font-serif">
                <h1>Real Problems</h1>
                <h1 className="max-w-3xl">
                  <span>' </span>
                  <span className="text-[#8cff00]">
                    Intelligent AI. Automated Solutions. End-to-End Apps
                  </span>
                  <span> '</span>
                </h1>
              </div>
              <div className="flex justify-center opacity-80 font-serif mt-3">
                <p className="text-center max-w-md pt-5 pb-3">
                  AI Engineer at Blue Cascade specializing in CV, NLP, RAG, and
                  full-stack AI development, with strong MLOps experience.
                </p>
              </div>
              <div className="py-4 space-x-2 sm:space-x-4 text-black  sm:text-lg font-semibold">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1rX6ojawHKkWDZCR2yoBUUhVXRrGaLIxb/view?usp=sharing"
                >
                  <button className="bg-[#8CFF00] rounded-lg p-1 px-2 sm:p-1 sm:px-4 transition-shadow duration-700 ease-out hover:shadow-[0_4px_20px_#8CFF00]">
                    Preview Resume
                  </button>
                </a>
                <button
                  className="bg-white rounded-lg p-1 px-2 sm:p-1 sm:px-4 transition-colors duration-700 hover:bg-neutral-400"
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
