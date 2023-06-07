import React, { useEffect, useState } from 'react'
import InputAndButton from './components/InputAndButton'
import MovieData from './components/MovieData'
import MovieService from './services/MovieService'

const App = () => {
  const [query, setQuery] = useState('game%20of%20thrones')
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      await MovieService(query).then((movieVar) => {
      })
    }
    fetchMovie();
  }, [query,movieData])

  console.log(movieData);



  return (
    <div className='mx-auto mt-4 py-4 px-28 max-w-[1000px]'>
      <div className='bg-gradient-to-r from-[#283048]  rounded-md to-[#586266] '>
      <InputAndButton />
      <MovieData />
      </div>
    </div>
    
  )
}

export default App;
