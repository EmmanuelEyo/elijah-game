import React from "react";
import videoBg from "../assets/videoBg.mp4";
import dability1 from "../assets/DABILITY-logo.png";
import dability2 from "../assets/DABILITY.png";
import steamlogs from "../assets/steam_logo.png";

const Home = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen">
      <div className="w-full h-[100vh]">
        <video
          className="w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        ></video>
        <div>
          <img
            src={dability2}
            alt="game_logos"
            className="absolute h-24 w-[250px] lg:w-[430px] top-80 left-[55px] lg:left-[40rem]"
          />
          <img
            src={dability1}
            alt="game_logos2"
            className="absolute top-[380px] w-[70px] lg:w-[100px] h-14 left-[293px] lg:left-[66rem]"
          />
        </div>
        <div className="absolute top-[430px] tracking-tighter left-[100px] lg:left-[41rem] lg:text-5xl text-2xl text-white uppercase">
          <h1>play for free now</h1>
        </div>
        <button
          type="button"
          className="text-white absolute bg-[#0a192f] focus:ring-4 focus:outline-none font-light text-lg px-5 py-2 top-[500px] left-[70px] lg:left-[750px] rounded-xl text-center inline-flex items-center mr-2 mb-2 uppercase"
        >
          <img
            src={steamlogs}
            alt="steam_logo"
            className="w-24 h-14 -ml-8 -mr-3"
          />
          get it on <p className="ml-2 text-2xl font-semibold">steam</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
