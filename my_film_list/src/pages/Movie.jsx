
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";



const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {

  const{id} = useParams()
  const [movie, setMovie] = useState(null)


  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
};

useEffect(() => {
  const movieUrl = `${moviesURL}${id}?${apiKey}`;

  getMovie(movieUrl)
});


    return (
      <div className="App">

        {movie && (
          <><MovieCard movie={movie} showLink={false}/></>
        )}
      </div>
    )
  }
  
  export default Movie