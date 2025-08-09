import React from "react";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-16">My Skills</h1>
      <div className="md:place-items-baseline place-items-center">
        <div className="bg-[#333333] md:h-40 place-content-center flex h-96 md:flex-row flex-col md:w-full  w-1/2 justify-around items-center">
          <div className="place-items-center">
            <h3 className="text-4xl opacity-50">80%</h3>
            <h6 className="text-[#27AE60]">React</h6>
          </div>
          <div className="place-items-center">
            <h3 className="text-4xl opacity-50">100%</h3>
            <h6 className="text-[#27AE60]">Python</h6>
          </div>
          <div className="place-items-center">
            <h3 className="text-4xl opacity-50">70%</h3>
            <h6 className="text-[#27AE60]">AI</h6>
          </div>
          <div className="place-items-center">
            <h3 className="text-4xl opacity-50">50%</h3>
            <h6 className="text-[#27AE60]">Machine Learning</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
