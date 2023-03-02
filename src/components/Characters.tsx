import React from "react";
import game_char from "../assets/game_char-remove.png";

const Characters = () => {
  return (
    <div className="bg-slate-800 text-gray-300 px-5 py-24 flex justify-center items-center flex-wrap mx-auto">
      <div className="h-full lg:w-[44%]">
        <div className="relative">
          <h1 className="uppercase tracking-widest lg:text-6xl text-xl">
            choose your <span>characters</span>
          </h1>
          <hr className="my-6 lg:w-80 lg:mr-[57rem] border-gray-600 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <h2 className="mb-10 text-lg">
            get ready to{" "}
            <span className="text-2xl font-semibold capitalize">fight</span>{" "}
            with your favorite characters
          </h2>
          <button className="relative uppercase inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-slate-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              see characters
            </span>
          </button>
        </div>
      </div>
      <div className="h-full">
        <div className="relative">
          <img src={game_char} className="h-[35rem]" alt="game-char" />
        </div>
      </div>
    </div>
  );
};

export default Characters;
