import logo from './logo.svg';
import './App.css';
import { evaluate } from "mathjs";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const cleanValue = (e) => {
    setValue("");
  };
  const getValue = (e) => {
    if (typeof value === "number") {
      setValue("".concat(e.target.name));
    } else {
      setValue(value.concat(e.target.name));
    }
  };
  const resultValue = () => {
    setValue(evaluate(value));
  };
  return (
    <div className="App">
      <div className="xx">
      <input className="x" value={value} />
      <button onClick={cleanValue}>Clear</button>
      <button name="9" onClick={getValue}>
        9
      </button>
      <button name="+" onClick={getValue}>
        +
      </button>

      <button name="7" onClick={getValue}>
        7
      </button>

      <button name="8" onClick={getValue}>
        8
      </button>
      <button name="-" onClick={getValue}>
        -
      </button>
      <button name="5" onClick={getValue}>
        5
      </button>
      <button name="6" onClick={getValue}>
        6
      </button>
      <button name="*" onClick={getValue}>
        x
      </button>
      <button name="3" onClick={getValue}>
        3
      </button>
      <button name="4" onClick={getValue}>
        4
      </button>
      <button name="/" onClick={getValue}>
        /
      </button>
      <button name="1" onClick={getValue}>
        1
      </button>
      <button name="2" onClick={getValue}>
        2
      </button>
      <button name="." onClick={getValue}>
        .
      </button>
      <button name="0" onClick={getValue}>
        0
      </button>
      <button className="x2" onClick={resultValue}>
        =
      </button>
      </div>
    </div>
  );
}
