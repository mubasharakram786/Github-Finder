import { useContext } from "react"
import ContextMovie from "../context/ContextMovie"
import Movie from "./Movie"

function MoviesList() {
  const{moviesList}=useContext(ContextMovie)
  return ( 
    <div className="movie-list">
        {moviesList.map((movie)=> <Movie item={movie} />)}
    </div>
  )
}

export default MoviesList