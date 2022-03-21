import logo from './logo.svg';
import './App.css';
import InputBar from './components/InputBar';
import { useState } from 'react';

function App() {
  const [distance, setDistance] = useState()
  const [height, setHeight] = useState()
  const [money, setMoney] = useState()

  const calcMoney = (dist,height) => {
    if (dist < 0) {
      return
    }
    if (height < 0) {
      return
    }

    setMoney(Math.round(Math.abs(0.04 * dist + 0.005*height + 10 * Math.sin(dist / 0.42 * 2 * Math.PI) + (3+height/1337) * Math.cos(height / 21 * 2 * Math.PI) ) * 20) / 20)
    setDistance(dist)
    setHeight(height)
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
      {distance && height &&
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
