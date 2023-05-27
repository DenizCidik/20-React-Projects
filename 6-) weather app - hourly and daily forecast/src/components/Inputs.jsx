import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {
    const [city, setCity] = useState('');
    console.log(city);

    const handleSearchClick = () => {
        if (city !== '') setQuery({q: city})
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    }

    const handleLocationClick = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat,
                    lon,
                });
            })
        }
    }

  return (

    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>


            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none place capitalize placeholder:lowercase' placeholder='Search...'/>
            <UilSearch className='text-white cursor-pointer transition ease-out hover:scale-110' size={30} onClick={handleSearchClick}/>
           <UilLocationPoint className='text-white cursor-pointer transition ease-out hover:scale-110' size={30} onClick={handleLocationClick}/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-semibold' onClick={handleUnitsChange}>°C</button>
            <p className='mx-2'></p>
            <button name='imperial' className='text-xl text-white font-semibold' onClick={handleUnitsChange}>°F</button>
        </div>

    </div>

    )
}

export default Inputs