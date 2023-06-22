import './App.css';
import React, { useState } from 'react';

function ResultItem({ result }) {
  return <li>{result}</li>;
}

function ResultsHistory({ results }) {
  return (
    <div>
      <h3>Histórico</h3>
      <ul>
        {results.map((result, index) => (
          <ResultItem key={index} result={result} />
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [results, setResults] = useState([]);

  const num1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const num2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const handleOperation = (operation) => {
    let r;

    switch (operation) {
      case '+':
        r = num1 + num2;
        break;
      case '-':
        r = num1 - num2;
        break;
      case 'x':
        r = num1 * num2;
        break;
      case '/':
        r = num1 / num2;
        break;
      default:
        break;
    }

    setResult(r);
    setResults([...results, r]);
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="content">
        <div className="numbers">
          <div>
            <label htmlFor="num1">1° Numero: </label>
            <input type="number" id="num1" value={num1} onChange={num1Change} />
          </div>
          <div>
            <label htmlFor="num2">2° Numero: </label>
            <input type="number" id="num2" value={num2} onChange={num2Change} />
          </div>
        </div>
        <div className="buttonsOp">
          <button onClick={() => handleOperation('+')}>+</button>
          <button onClick={() => handleOperation('-')}>-</button>
          <button onClick={() => handleOperation('x')}>x</button>
          <button onClick={() => handleOperation('/')}>/</button>
        </div>
        <h2>Resultado: {result}</h2>
      </div>
      <ResultsHistory results={results} />
    </div>
  );
}

export default App;
