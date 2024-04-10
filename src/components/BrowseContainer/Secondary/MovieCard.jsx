import React from "react";
import { IMG_URL } from "../../../Utils/Constants";
const MovieCard = ({posterPath}) => {
if(!posterPath) return null;
  return <div className="w-80 pr-5">
    <img alt="Movie Card" src={IMG_URL + posterPath}/>
  </div>;
};

export default MovieCard;
