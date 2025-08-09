import React from 'react';

const CircleWithInfo = ({about, detail}) => {
    return (
        <div className="w-auto h-24 place-items-center">
          <div className="size-12 place-items-center place-content-center rounded-full bg-[#212121]">
            <div className="bg-[#27AE60] size-3 rounded-full" />
          </div>
          <p>{about}</p>
          <p className="hover:underline cursor-pointer focus:border-green-900">{detail}</p>
        </div>
    );
}

export default CircleWithInfo;
