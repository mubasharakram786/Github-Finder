import Movie from "./Movie"

function MoviesList({movies}) {
  return ( 
    <div className="movie-list">
        {movies.map((movie)=> <Movie item={movie} />)}
    </div>
  )
}

export default MoviesList