import classes from "./MovieItemHeader.module.css"

function MovieItemHeader() {
  return (
    <div className={classes.container}>
      <div>Name</div>
      <div>Genre</div>
      <div>Price</div>
      <div>Is in stock</div>
      <div>Rent</div>
    </div>
  )
}

export default MovieItemHeader