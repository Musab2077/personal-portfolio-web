import React from "react";
import { FaDev } from "react-icons/fa";
import { SiMlflow } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { VscRobot } from "react-icons/vsc";
import BoxWithService from "./BoxWithService";
import CommonHeader from "./CommonHeader";

const Services = () => {
  const iconDesigning = "text-[#27AE60] mb-1";
  const iconArray = [
    <FaDev className={iconDesigning} />,
    <SiMlflow className={iconDesigning} />,
    <LuBrainCircuit className={iconDesigning} />,
    <VscRobot className={iconDesigning} />,
  ];

  const boxDetailArray = [
    "Making websites from engaging frontend designs to secure backend systems tailored to your business needs",
    "I build intelligent systems that automate tasks, enhance user experience, and drive data-driven decisions",
    "I develop intelligent models that solve real-world problems and enhance product capabilities",
    "I will handle deployment, monitoring, and scaling of machine learning models to ensure efficient AI solutions",
  ];

  const heading1Array = ["Web", "AI", "Machine Learning and", "Ml-Ops"];
  const heading2Array = ["Development", "Development", "Deep Learning"];

  return (
    <div className="my-20">
      <CommonHeader title={"Services"} question={"What I do"} />
      <div className="lg:flex-row sm:grid xl:grid-cols-4 sm:grid-cols-2 flex-col justify-between place-items-center mt-16">
        <BoxWithService
          icon={iconArray[0]}
          heading1={heading1Array[0]}
          heading2={heading2Array[0]}
          detail={boxDetailArray[0]}
        />
        <BoxWithService
          icon={iconArray[1]}
          heading1={heading1Array[1]}
          heading2={heading2Array[1]}
          detail={boxDetailArray[1]}
        />
        <div className="sm:mt-10 xl:mt-0">
          <BoxWithService
            icon={iconArray[2]}
            heading1={heading1Array[2]}
            heading2={heading2Array[2]}
            detail={boxDetailArray[2]}
          />
        </div>
        <div className="sm:mt-10 xl:mt-0">
          <BoxWithService
            icon={iconArray[3]}
            heading1={heading1Array[3]}
            detail={boxDetailArray[3]}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
