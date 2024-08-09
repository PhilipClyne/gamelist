import React, { useEffect } from "react";

const BannerGame = ({ gameBanner }) => {
  useEffect(() => {
    // console.log("Game banner: ", gameBanner);
  }, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 rounded-lg bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1 rounded-lg">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className="md:h-full w-full object-cover rounded-lg"
        alt=""
      />
    </div>
  );
};

export default BannerGame;
