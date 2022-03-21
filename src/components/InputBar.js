import { useState } from 'react'
import '../App.css';

const InputBar = ({ onEnter }) => {
  const [distance, setDistance] = useState()
  const [height, setHeight] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!distance) {
      alert('Please add distance!')
      return
    }
    if (!height) {
      alert('Please add elevation!')
      return
    }

    onEnter(distance,height)

    setDistance('')
    setHeight('')
  }

  return (
    <form onSubmit={onSubmit} >
      <div>
        <h4>Distance:</h4>
      </div>
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
        <h4>Elevation:</h4>
      </div>
      <div>
        <input
          className='InputBar'
          type='number'
          min='0'
          placeholder='m'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <input type='submit' value='Claculate' className='btn' />
      </div>
    </form>
  )
}

export default InputBar;