import React from "react";

const CommonHeader = ({ title, question, answer, designTweek }) => {
  return (
    <>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-64 z-20 overflow-hidden">
        <div
          className={`
                absolute top-0 left-1/2 -translate-x-1/2
                w-[90%] h-full blur-2xl
                bg-gradient-to-b
                ${designTweek}
                to-transparent
                [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
              `}
        />
        <div
          className="
                absolute top-0 left-1/2 -translate-x-1/2
                w-[90%] h-px
                bg-emerald-400/70
                blur-[1px]
                [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]
              "
        />
      </div>
      <div className="text-center mb-7">
        <span className="relative mb-4 inline-block border-l border-[#8cff00] pt-1 rounded-2xl px-2 font-semibold text-lg">
          {title}
          <span
            className="
                absolute
                top-[1px] left-2
                h-[0.5px]
                w-1/4
                bg-[#95d843]
                opacity-60
                "
          />
        </span>
        <h2 className="text-5xl mb-3 text-white font-sans">{question}</h2>
        <span className="text-sm text-gray-300 opacity-80">{answer}</span>
      </div>
    </>
  );
};

export default CommonHeader;
