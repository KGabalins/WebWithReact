import MovieItem from "./MovieItem"

function MovieItemList(props) {
  return (
    <>
    {props.movies.map((movie) => (
      <MovieItem 
      name={movie.name}
      genre={movie.genre}
      price={movie.price}
      stock={movie.stock}
      />
    ))}
    </>
  )
}

export default MovieItemList