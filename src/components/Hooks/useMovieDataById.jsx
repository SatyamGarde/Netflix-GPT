import { useDispatch } from "react-redux";
import {addMoviesDataById } from "../../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../Utils/Constants";

const useMovieDataById = (id)=>{
    const dispatch = useDispatch();
    // console.log(id);
    const getMoviesById = async () => {
      
      const data = await fetch('https://api.themoviedb.org/3/movie/823464?language=en-US', API_OPTIONS);
      const json = await data.json();
    console.log(json.results);
    dispatch(addMoviesDataById(json.results));
  
    };
  
    useEffect(() => {
      getMoviesById();
    }, []);
}

export default useMovieDataById;