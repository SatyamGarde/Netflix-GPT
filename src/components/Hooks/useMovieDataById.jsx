import { useDispatch } from "react-redux";
import { addMoviesDataById } from "../../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../Utils/Constants";

const useMovieDataById = (id) => {
  const dispatch = useDispatch();

  const getMoviesById = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      // console.log("Moviesdata", data);
      dispatch(addMoviesDataById(data));
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getMoviesById();
  }, [id]);
};

export default useMovieDataById;
