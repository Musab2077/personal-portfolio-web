import React from "react";
import CircleWithInfo from "./CircleWithInfo";

const PersonalInfo = () => {
  const about = ["Email Address", "Linked-In", "Github", "Phone"];
  const aboutDetail = [
    "muhammadmusab2077@gmail.com",
    "muhammad-musab-37a2312a5",
    "github.com/Musab2077",
    "+92 3146260032",
  ];

  return (
    <div>
      <div className="flex lg:flex-row space-y-4 lg:space-y-0 flex-col xl:justify-around justify-between mt-9">
        <CircleWithInfo about={about[0]} detail={aboutDetail[0]} />
        <CircleWithInfo
          about={about[1]}
          detail={
            <a
              href="https://www.linkedin.com/in/muhammad-musab-37a2312a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutDetail[1]}
            </a>
          }
        />
        <CircleWithInfo
          about={about[2]}
          detail={
            <a
              href="https://github.com/Musab2077"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutDetail[2]}
            </a>
          }
        />
        <CircleWithInfo about={about[3]} detail={aboutDetail[3]} />
      </div>
    </div>
  );
};

export default PersonalInfo;
