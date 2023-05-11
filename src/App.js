import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [lastOperator, setLastOperator] = useState("");

  const buttons = [
    { label: "7", value: "7", type: "number" },
    { label: "8", value: "8", type: "number" },
    { label: "9", value: "9", type: "number" },
    { label: "÷", value: "/", type: "operator" },
    { label: "4", value: "4", type: "number" },
    { label: "5", value: "5", type: "number" },
    { label: "6", value: "6", type: "number" },
    { label: "×", value: "*", type: "operator" },
    { label: "1", value: "1", type: "number" },
    { label: "2", value: "2", type: "number" },
    { label: "3", value: "3", type: "number" },
    { label: "-", value: "-", type: "operator" },
    { label: "0", value: "0", type: "number" },
    { label: ".", value: ".", type: "number" },
    { label: "=", value: "=", type: "operator" },
    { label: "+", value: "+", type: "operator" },
  ];
  const handleNumber = (value) => {
    if (currentNumber === "0") {
      setCurrentNumber(value);
    } else {
      setCurrentNumber(currentNumber + value);
    }
  };

  const handleOperator = (value) => {
    if (lastOperator === "") {
      setCurrentNumber(currentNumber + value);
      setLastOperator(value);
    } else {
      // eslint-disable-next-line
      const result = eval(currentNumber);
      setCurrentNumber(result + value);
      setLastOperator(value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <p>{currentNumber}</p>
        </div>
        <div className="buttons">
          {buttons.map((button) => (
            <Button
              key={button.value}
              label={button.label}
              type={button.type}
              onClick={
                button.type === "number"
                  ? () => handleNumber(button.value)
                  : () => handleOperator(button.value)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const Button = ({ label, type, onClick }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default App;