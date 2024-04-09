import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-20 flex flex-wrap items-center justify-center h-screen w-1/3 absolute text-white bg-gradient-to-r from-black z-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold my-5">{title}</h1>
        <div className="text-xl">{overview}</div>
        <div className="m-2">
          <button className="bg-white p-2 w-36 font-bold rounded-lg text-2xl text-black hover:bg-opacity-80">
            Play
          </button>
          <button className="bg-gray-500 p-2 w-40 rounded-lg text-2xl mx-4 font-bold bg-opacity-50 text-white">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
