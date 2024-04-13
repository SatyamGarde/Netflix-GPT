import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "./Hooks/useMovieTrailer";

const VideoPopUp = ({ id }) => {
  const trailerfromstore = useSelector((store) => {
    return store.movies?.movieTrailer;
  });

  useMovieTrailer(id);

  const desiredWedth = "calc(110vh)";
  return (
    <div className=" h-30" style={{ width: desiredWedth }}>
      <iframe
        className=" h-30 aspect-video mx-12 mt-14"
        src={
          "https://www.youtube.com/embed/" +
          trailerfromstore?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ transform: "scale(1.1)", width: desiredWedth }}
      ></iframe>
    </div>
  );
};

export default VideoPopUp;
