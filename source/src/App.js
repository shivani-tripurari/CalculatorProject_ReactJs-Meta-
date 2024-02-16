
import './App.css';
import './index.css';
import { useState } from 'react';

function App() {

  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");
  const ops = ["+","-","*","/","."];

  const updateCalc = function(value){

    if(ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }

    setCalc(calc+value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const calculate = function(){
    setCalc(eval(calc).toString());
  }

  const createDig = function(){
    const Digits = [];
    for(let i=1; i<10; i++){
      Digits.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return Digits;
  }

  

  return (
    <div className="App">

      <div className="Title">
        <header className="App-header">
          <p>
            Pixelated Calculator...
          </p>
        </header>
      </div>

      <div className="Calculator">

        <div className="Display">
          {result?<span>({result})</span>:""}{calc || 0}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button>DEL</button>
        </div>

        <div className="Digits">
          {createDig()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>


    </div>
  );
}

export default App;
