import React from "react";
import { IMG_URL } from "../../../Utils/Constants";
const MovieCard = ({posterPath}) => {

  return <div className="w-72 pr-3">
    <img alt="Movie Card" src={IMG_URL + posterPath}/>
  </div>;
};

export default MovieCard;
