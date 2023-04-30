import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
  const className = {
    1: "nums",
    2: "nums",
    3: "nums",
    4: "nums",
    5: "nums",
    6: "nums",
    7: "nums",
    8: "nums",
    9: "nums",
    0: "nums",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  //  operation function
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // equals function

  //  number function
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // equals function
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          x: (a, b) => a * b,
          "-": (a, b) => a - b,
          "/": (a, b) => a / b,
        };

        return result[sign](a, b);
      };

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    };
    }

    // percentage function
    const percentageClick = () => {
      setCalc({
        num: (calc.num / 100) ,
        res: calc.res / 100,
        sign: ''
      })
    }

    // squared function
    const squaredClick = () => {
      setCalc({
        num: (calc.num * calc.num),
        res: calc.num * calc.num,
        sign: ''
      })
    }

  // invert function
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      'C': resetClick,
      "/": signClick,
      'x': signClick,
      "+": signClick,
      "-": signClick,
      "=": equalsClick,
      "%": percentageClick,
      "x²": squaredClick,
      "±": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
