import {useState} from 'react'
import Movie from './Movie';

const App = () => {
  const [movie, setMovie] = useState({Name: "Interstellar", ratings: 8.5});
  return (
    <div>
      <Movie movie = {movie} setMovie = {setMovie}/>
    </div>
  )
}

export default App
//



const Movie = (props) => {
  const changeRating = () => {
    props.setMovie({...props.movie,ratings : 9})
  }
  return (
    <div>
      <h1>{props.movie.Name}</h1>
      <h2>{props.movie.ratings}</h2>
      <button onClick={changeRating}>Change Rating</button>
    </div>
  )
}

export default Movie