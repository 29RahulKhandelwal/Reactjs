import React, { useState } from 'react';
import axios from 'axios';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies,setMovies]=useState([])
  const [isLoading,setIsLoading]=useState(false);
  async function fetchMoviesHandler(){
    setIsLoading(true);
    const res=await axios.get('https://react-movies-f0b59-default-rtdb.firebaseio.com/movies.json')
    
    const loadedMovies=[];
    for(let key in res.data){
      loadedMovies.push({
        id:key,
        title:res.data[key].body.title,
        openingText:res.data[key].body.openingText,
        releaseDate:res.data[key].body.releaseDate
      })
    }
    setMovies(loadedMovies)
    setIsLoading(false);
  }
  async function addMovieHandler(movie){
     await axios.post("https://react-movies-f0b59-default-rtdb.firebaseio.com/movies.json",{
      body:movie,
      headers:{
        'Content-Type':'application/json'
      }
     })
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
