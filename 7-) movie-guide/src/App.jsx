import React, { useEffect, useState } from 'react'
import InputAndButton from './components/InputAndButton'
import MovieData from './components/MovieData'

const App = () => {
  const [query, setQuery] = useState('game%20of%20thrones')
  const [movieData, setMovieData] = useState([]);

  useEffect (() => {
    const fetchMovie = async  () => {
      const apiKey = '22a3770e';
      const url = `https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`;

      await fetch(url).then((res) => res.json()).then((data) => {
    
        const dataNew = [
          data.Title,
          data.imdbRating,
          data.Genre,
          data.Actors,
          data.Plot,
          data.Poster ]
        setMovieData(dataNew)
        if(data.Response == 'False') {
          
        }
      })
    }

    fetchMovie()
  }, [query,movieData])

  
  


  return (
  <div className='w-screen h-screen bg-gradient-to-r from-slate-600 to-slate-400 overflow-hidden pt-10'>
    <div className='mx-auto mt-4 py-4 px-28 max-w-[1000px]'>
      <div className='bg-gradient-to-r from-[#283048]  rounded-md to-[#586266]'>
      <InputAndButton setQuery={setQuery}/>
      <MovieData movieData={movieData}/>
      </div>
    </div>
  </div>
  )
}

export default App;
