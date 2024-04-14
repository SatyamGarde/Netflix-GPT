import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();
  const handlePly = () => {
  navigate(`/popup/${id}`);
}
  return (
    <div className="px-20 flex flex-wrap items-center justify-center h-screen w-1/3 absolute text-white bg-gradient-to-r from-black z-10">
      <div className="text-center">
        <h1 className="md:text-5xl text-2xl font-bold md:my-5">{title}</h1>
        <div className="text-xl hidden md:block">{overview}</div>
        <div className="m-2">
          <button className="bg-white p-2 md:w-36 w-16 font-bold rounded-lg md:text-2xl text-black hover:bg-opacity-80" onClick={handlePly}>
            Play
          </button>
          <button className="bg-gray-500 p-2 w-40 hidden md:inline-block rounded-lg text-2xl mx-4 font-bold bg-opacity-50 text-white">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
