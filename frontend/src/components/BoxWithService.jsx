import React from "react";

const BoxWithService = ({ icon, heading1, heading2, detail, margin }) => {
  return (
    <div
      className={`w-60 h-40 hover:animate-border-grow py-2 px-3 bg-[#212121] text-xl sm:m-0 my-10 rounded-sm border-b-4 border-b-[#212121] hover:border-b-[#27AE60] flex flex-col justify-between ${margin}`}
    >
      <div>
        {icon}
        <h3>{heading1}</h3>
        <h3>{heading2}</h3>
      </div>
      <p className="text-ellipsis text-xs opacity-50">{detail}</p>
    </div>
  );
};

export default BoxWithService;
