import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
  return (
    <>
    <div>
        <h2>Redux-Toolkit</h2>
        <h3>Count is {count}</h3>
    </div>
    </>
  )
}

export default Navbar