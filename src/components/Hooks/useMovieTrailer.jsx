import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../Utils/Constants";

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch();
    const getMoviesById = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
  
      const trailers = json.results.filter(
        (results) => results.type == "Trailer"
      );
  
      const trailer = trailers[0];
      dispatch(addMovieTrailer(trailer));
    };
  
    useEffect(() => {
      getMoviesById();
    }, []);
}

export default useMovieTrailer;