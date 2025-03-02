import React from 'react'
import Login from './Login'

function Button({count}) {
  return (
    <>
    <button><span><Login count={count}/></span>Click Me!</button>
    </>
  )
}

export default Button