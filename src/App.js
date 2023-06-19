import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const num1Change = (e) =>{
    setNum1(Number(e.target.value))
  }
  const num2Change = (e) =>{
    setNum2(Number(e.target.value))
  }

  const handleAdd = () =>{
    const r = num1 + num2
    setResult(r)
  }

  const handleSub = () =>{
    const r = num1 - num2
    setResult(r)
  }

  const handleMult = () =>{
    const r = num1 * num2
    setResult(r)
  }

  const handleDiv = () =>{
    const r = num1 / num2
    setResult(r)
  }


  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className='content'>
        <div className='numbers'>
          <div>
            <label htmlFor='num1'>1° Numero: </label>
          <input type="number" id="num1" value={num1} onChange={num1Change}/>
          </div>
          <div>
            <label htmlFor='num2'>2° Numero: </label>
          <input type="number" id="num2" value={num2} onChange={num2Change}/>
          </div>
        </div>
        <div className='buttonsOp'>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleMult}>x</button>
        <button onClick={handleDiv}>/</button>
        </div>
        <h2>Resultado: {result}</h2>
      </div>
      
    </div>
  );
}

export default App;
