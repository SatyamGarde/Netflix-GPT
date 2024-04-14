import React from "react";
import VideoPopUp from "./VideoPopUp";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../Utils/Modal";
import useMovieDataById from "./Hooks/useMovieDataById";
import { useSelector } from "react-redux";

export default function MoviePopUp() {
  const { id } = useParams();
  const navigate = useNavigate();
  useMovieDataById(id);

  const moviesData = useSelector((store) => store.MovieData.MoviesDataByID);
  console.log("moviesdata", moviesData);
  const [open, setOpen] = useState(false);

  const handleCloseAndNavigate = () => {
    setOpen(false);
    navigate("/browse");
  };

  const desiredHeight = "calc(100vh - 100px)";
  const desiredWidth = "calc(120vh)";
  
  return (
    <main className="App ">
      <button className="btn btn-danger bg-black" onClick={() => setOpen(true)}>
        Open
      </button>

      <Modal open={open} onClose={handleCloseAndNavigate}>
        <div className="fixed  ">
          <VideoPopUp id={id} />
        </div>

        {/* Modal content */}
        <div className="relative z-10 -mx-5" style={{ height: desiredHeight, width: desiredWidth }}>
          <div className="  h-full " style={{ marginTop: "550px" }}>
            <div className=" my-4 w-full text-white">
              {/* Check if moviesData exists before accessing its properties */}
              {moviesData && (
                <>
                  <h1 className="font-bold justify-center text-5xl pb-9 px-12 bg-transparent ">{moviesData.title}</h1>
                  <div className=" bg-gray-950 mt-4 flex flex-wrap text-gray-400"> 
                    <div className="flex mx-16 text-3xl gap-12 py-1">
                      <p className="p-2">{moviesData.runtime} min</p>
                      <p className="p-2 rounded-lg border border-gray-400">U/A 13+</p>
                      <p className="p-2">{moviesData.release_date}</p>
                      <p className="text-green-500 p-2 rounded-lg">{moviesData.vote_average} Rating</p>
                    </div>
                    <p className="text-2xl py-16 px-12">{moviesData.overview}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
}
