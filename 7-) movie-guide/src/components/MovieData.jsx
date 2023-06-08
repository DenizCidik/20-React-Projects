import React, { useState } from 'react'
import { UilStar } from '@iconscout/react-unicons'
import star from '../assets/favorite.svg'




const MovieData = ({ movieData }) => {
    

  return (
    <div className='pt-2 pb-8 flex flex-row items-start justify-center'>

        <img className='rounded-lg ml-5' src={movieData[5]} alt="" />
        <div className='mx-5 px-10 flex-col flex justify-center items-center'>
            <p className='text-2xl text-white font-semibold uppercase px-2'>{movieData[0]}</p>
            <div className="flex flex-row mt-4">
                <img src={star} alt="star" className='w-[32px] h-[32px]'/>
                <p className='text-gray-200 ml-1 text-[25px]'>{movieData[1]}</p>
            </div>
            <div className='flex flex-row mt-3'>
                <p className='text-gray-200 mx-1 border-solid border-2 p-2 border-gray-400 bg-none rounded-md hover:opacity-80 cursor-pointer capitalize'>{movieData[2]}</p>
            </div>
            <div className='mt-8'>
                <div className="flex flex-row items-center text-gray-200">
                    <h3 className='mr-4 font-bold uppercase text-lg mb-1'>Plot:</h3>
                    <p className='text-md'>{movieData[4]}</p>
                </div>
                <div className="flex flex-row items-center mt-5 text-gray-200">
                    <h3 className='mr-4 font-bold uppercase text-lg'>Cast:</h3>
                    <p className='text-md font-semibold'>{movieData[3]}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default MovieData