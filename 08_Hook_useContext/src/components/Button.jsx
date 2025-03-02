import React, { useContext } from 'react'
import Login from './Login'
import { counterContext } from '../context/context'

function Button() {

    const value = useContext(counterContext)
  return (
    <>
    <button onClick={() => value.setCount((count) => count + 1)}><span><Login /></span>Click Me!</button>
    </>
  )
}

export default Button