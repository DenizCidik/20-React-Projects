import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = btn => {

  const className = {
    '1': 'nums',
    '2': 'nums',
    '3': 'nums',
    '4': 'nums',
    '5': 'nums',
    '6': 'nums',
    '7': 'nums',
    '8': 'nums',
    '9': 'nums',
    '0': 'nums',
  }
  return className[btn];
}

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  
  const commaClick = () => {
  }

  const handleBtnClick = () => {
    console.log(value)

    const results = {
      '.': commaClick

    }
    
    return results[value]()
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button