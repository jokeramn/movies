import React, { useEffect, useState } from 'react'

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

const API_KEY = process.env.REACT_APP_API_KEY


function App() {
  const [movies, setMovies] = useState([])
  const [valueOfMovie, setvalueOfMovie] = useState('matrix')
  const [error, setError] = useState(false)
  const [type, setType] = useState('all')

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${valueOfMovie}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(res => res.json())
      .then(data => {
        if (data.Search !== undefined) {
          setMovies(data.Search)
        } else {
          throw new Error('OOOPS')
        }
      })
      .catch(err => {
        setError(true)
        return err
      })

  }, [valueOfMovie, type])

  const onSearchMovie = (name) => {
    setvalueOfMovie(name)
  }

  const handleChangeType = (type) => {
    setType(type)
  }

  return (
    <>
      <Header />
      <div className='wrapper'>
        {error ? <div>ОШИБКА, НЕПРАВИЛЬНО ВВЕДЕННЫЙ ФИЛЬМ</div> : (<Main movies={movies} onSearchMovie={onSearchMovie} handleChangeType={handleChangeType} valueOfType={type} />)}
        <Footer />
      </div>
    </>
  );
}

export default App;
