import React from 'react'





const MovieService  = async (movie) => {
  const apiKey = '22a3770e';
  const url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;
  await fetch(url).then((res) => res.json()).then((data) => {
    
    console.log(data.Title)

  })
  
    
}

export default MovieService