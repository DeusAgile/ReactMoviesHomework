import React, { useEffect, useState } from 'react';
import MovieList from '../components/movieList';
import Search from '../components/search';

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=defff755&s=${value}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }, [value])

  return (
    <>
      <Search value={value} setValue={setValue}></Search>
      <MovieList movies={movies} />
    </>
  );
}

export default Main;