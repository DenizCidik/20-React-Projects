import React from 'react'





const MovieService  = async (movie) => {
  const apiKey = '22a3770e';
  const url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;
  await fetch(url).then((res) => res.json()).then((data) => {
    const{
      Title,
      Genre,
      imdbRating,
      Plot,
      Actors,
    } = data

    console.log(data)

    return (
      {Title,
        Genre,
        imdbRating,
        Plot,
        Actors}
    )

  })
  
    
}

export default MovieService