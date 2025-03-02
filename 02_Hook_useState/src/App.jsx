import React, { useState } from 'react'
import './app.css'

function App() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <div className='main'>Number: {number}</div>
      <button className='btn' onClick={() => setNumber(number + 1)}>+</button>
      <button className='btn' onClick={() => setNumber(number - 1)}>-</button>
    </>
  )
}

export default App