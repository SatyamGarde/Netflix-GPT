import React from "react";
import { IMG_URL } from "../../../Utils/Constants";
const MovieCard = ({posterPath}) => {
if(!posterPath) return null;
  return <div className="w-80 pr-2 md:pr-5">
    <img className="h-80 md:h-auto " alt="Movie Card" src={IMG_URL + posterPath}/>
  </div>;
};

export default MovieCard;
