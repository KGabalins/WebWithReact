import classes from "./MovieItems.module.css"

function MovieItem(props) {
  return(
    <div className={classes.container}>
      <div>{props.name}</div>
      <div>{props.genre}</div>
      <div>{props.price}</div>
      <div>{props.stock}</div>
      <div><button>Rent</button></div>
    </div>
  )
}

export default MovieItem