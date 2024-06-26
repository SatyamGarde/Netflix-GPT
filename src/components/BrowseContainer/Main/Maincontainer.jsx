import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const Maincontainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  if (!movies || movies.length === 0) return ;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
    
      <VideoTitle title={original_title} overview={overview} id={id}/>
      <VideoBackground id={id}/>
    </div>
  )
}
export default Maincontainer;