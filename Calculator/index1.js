import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (input) => {
    setDisplayValue((prevValue) => prevValue + input);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <input id="display" value={displayValue} readOnly />
      <div className="keys">
        <button onClick={() => appendToDisplay('+')} className="operator-btn">+</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('-')} className="operator-btn">-</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('*')} className="operator-btn">*</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('/')} className="operator-btn">/</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearDisplay} className="operator-btn">C</button>
      </div>
    </div>
  );
}

export default Calculator;
