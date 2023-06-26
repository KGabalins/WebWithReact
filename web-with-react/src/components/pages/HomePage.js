import classes from "./HomePage.module.css"

import MovieItemHeader from "../movieItems/MovieItemHeader"
import MovieItemList from "../movieItems/MovieItemList"

let movies = [
  {
    name: "Batman",
    genre: "Action",
    price: 0.55,
    stock: 3
  },
  {
    name: "Jaws",
    genre: "Action",
    price: 0.75,
    stock: 5
  },
  {
    name: "Die Hard",
    genre: "Action and adventure",
    price: 1.75,
    stock: 15
  }
]

function HomePage() {
  return(
    <div className={classes.main}>
      <h2 className={classes.title}>Available Movies</h2>
      <MovieItemHeader />
      <MovieItemList movies={movies}/>
    </div>

  )
}

export default HomePage