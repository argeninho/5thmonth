import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNum1, setNum2, setResult, setError } from "./store";
import { selectCalculator } from "./store";

const Calculator = () => {
  const dispatch = useDispatch();
  const { num1, num2, result, error } = useSelector(selectCalculator);

  const handleInputChange = (e, inputType) => {
    const value = parseInt(e.target.value, 10) || 0;

    if (inputType === "num1") {
      dispatch(setNum1(value));
    } else if (inputType === "num2") {
      dispatch(setNum2(value));
    }
  };

  const handleOperation = (operator) => {
    if (isNaN(num1) || isNaN(num2)) {
      dispatch(setError("Please enter valid numbers."));
      return;
    }

    dispatch(setError(null));

    switch (operator) {
      case "+":
        dispatch(setResult(num1 + num2));
        break;
      case "-":
        dispatch(setResult(num1 - num2));
        break;
      case "*":
        dispatch(setResult(num1 * num2));
        break;
      case "/":
        if (num2 === 0) {
          dispatch(setError("Cannot divide by zero."));
        } else {
          dispatch(setResult(num1 / num2));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={num1}
        onChange={(e) => handleInputChange(e, "num1")}
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => handleInputChange(e, "num2")}
      />
      <div>
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>
      <div>
        {error && <p>{error}</p>}
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
