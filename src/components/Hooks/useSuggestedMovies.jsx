import { useEffect } from "react";
import { API_OPTIONS } from "../../Utils/Constants"
import { useDispatch } from "react-redux";
import { addSuggestedMovies } from "../../Utils/moviesSlice";

const useSuggestedMovies =(id)=>{
    const dispatch = useDispatch();
    const getSuggestedMovies = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, API_OPTIONS);

        const json = await data.json();
        dispatch(addSuggestedMovies(json.results));
    }


useEffect(() => {
    getSuggestedMovies();
  }, []);
}

export default useSuggestedMovies;