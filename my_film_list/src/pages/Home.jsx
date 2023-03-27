import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Movie from "./Movie";

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
function Home(){
 
    const [topMovies, settopMovies] = useState([])

    const getTopMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        settopMovies(data.results);
    };
    useEffect(() => {
        const TopMovieUrl = `${movieUrl}popular?${apiKey}`;

        getTopMovies(TopMovieUrl)
    });



    return (
      <div className="principal">
        <h2 className="title">Most popular films</h2>
        <div className="films-container">
            {topMovies && 
            topMovies.map((Movie) => <MovieCard key={Movie.id} movie={Movie} />)}</div>
        
      </div>
    )
  }
  
  export default Home