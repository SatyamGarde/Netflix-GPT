import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerfromstore = useSelector((store) => {
    return store.movies?.movieTrailer;
  });

  useMovieTrailer(id);

  return (
    <div className="w-screen h-screen ">
      <div>
        <iframe
          className="w-screen h-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerfromstore?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
        
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ transform: "scale(1.1)" }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
