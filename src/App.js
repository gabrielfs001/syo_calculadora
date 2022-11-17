import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[totalConta, setTotalConta] = useState(0);
  const[totalPessoas, setTotalPessoas] = useState(1);
  const[gorjeta, setGorjeta] = useState(0);
  const[resultado, setResultado] = useState(0);

  const somar = () => {
    let valorFinal = (parseFloat(totalConta) + (parseFloat(totalConta) * parseFloat(gorjeta / 100))) / totalPessoas
     return parseFloat(valorFinal)
  }

  function diminuir() {
    //eslint-disable-next-line no-unused-expressions
    totalPessoas > 1 ? setTotalPessoas(totalPessoas - 1) : '';
  }

  function aumentar() {
    setTotalPessoas(totalPessoas + 1)
  }

  useEffect(() =>{
    setResultado(somar())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalConta, totalPessoas, gorjeta, resultado]
  )

  return (
    <div className="App">
      <div className="AppPt1">
      <label>Total da conta</label>
      <input type="number" placeholder='R$ 0.00' value={totalConta} onChange={(e) => setTotalConta(e.target.value)} />
      <label>Gorjeta %</label>
      <input type="number" placeholder='% 0' value={gorjeta} onChange={(e) => setGorjeta(e.target.value)}/>
      </div>
      <div className="AppPt2">
        <div className="Counter">
        <h2>Pessoas</h2>
        <button onClick={diminuir}>-</button>
         <input type="number" inputmode="numeric" placeholder='0' value={totalPessoas} onChange={(e) => setTotalPessoas(e.target.value)}/> <button onClick={aumentar}>+</button>
        </div>
        <div className="TotalPerPerson">
          <h2>Total Por Pessoa</h2>
          <label>{'R$ '+ resultado.toFixed(2)}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
