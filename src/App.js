import logo from './logo.svg';
import './App.css';
import InputBar from './components/InputBar';
import { useState } from 'react';

function App() {
  const [distance, setDistance] = useState()
  const [money, setMoney] = useState()

  const calcMoney = (dist) => {
    if (dist < 0) {
      return
    }

    setMoney(Math.round(Math.abs(0.5 * dist + 10 * Math.sin(dist / 0.042 * 2 * Math.PI) + 2 * Math.cos(dist / 0.097 * 2 * Math.PI)) * 100) / 100)
    setDistance(dist)
  }

  return (
    <div className="App">
      <header>  
      <h1 className='text'>Velo Tour Calculator</h1>
      <h3 className='text'>Cup of Color</h3>
      </header>
      <div >
        <InputBar onEnter={calcMoney} />
      </div>
      {distance &&

        <div>
          <div>
            <h3 className='text'>You will recive:</h3>
          </div>
          <div>
            <h2 className='text'>{money} Fr.</h2>
          </div>

        </div>
      }
    </div>
  );
}

export default App;
