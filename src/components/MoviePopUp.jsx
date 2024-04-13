import React from "react";
import VideoPopUp from "./VideoPopUp";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoTitle from "./BrowseContainer/Main/VideoTitle";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Modal from "../Utils/Modal";

export default function MoviePopUp() {
  const { id } = useParams();
  const navigate = useNavigate();

  const MoviesData = useSelector((store) => store.MovieData.MoviesDataByID);

  const movie = MoviesData.find((movie) => movie.id === Number(id));
  // console.log("Moviessss", movie.original_title);
  if (!movie) return;

  const [open, setOpen] = useState(false);

  const handleCloseAndNavigate = () => {
    setOpen(false);
    navigate('/browse');
  };

  const desiredHeight = "calc(100vh - 100px)";
  const desiredWedth = "calc(120vh)";
  return (
    <main className="App ">
      <button className="btn btn-danger bg-black" onClick={() => setOpen(true)}>
        Open
      </button>

      <Modal open={open} onClose={handleCloseAndNavigate}>
        <div
          className="text-center"
          style={{ height: desiredHeight, width: desiredWedth }}
        >
          <div className="mx-auto my-4 w-full">
            <div className="mt-4">
              <VideoPopUp id={id} />
              <div>
                <VideoTitle
                  title={movie.original_title}
                  overview={movie.overview}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4"></div>
        </div>
      </Modal>
    </main>
  );
}