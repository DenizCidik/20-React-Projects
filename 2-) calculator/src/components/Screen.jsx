import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const Screen = () => {
const {calc} = useContext(CalcContext);

  return (
    <div className='result'>321321</div>
  )
}

export default Screen