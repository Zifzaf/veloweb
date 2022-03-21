import { useState } from 'react'
import '../App.css';

const InputBar = ({ onEnter }) => {
  const [distance, setDistance] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!distance) {
      return
    }

    onEnter(distance)

    setDistance('')
  }

  return (
    <form onSubmit={onSubmit} >
      <div>
        <input
          className='InputBar'
          type='number'
          step='0.001'
          min='0'
          placeholder='km'
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div>
        <input type='submit' value='Claculate' className='btn' />
      </div>
    </form>
  )
}

export default InputBar;