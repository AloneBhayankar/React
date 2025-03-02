import React, {useContext} from 'react'
import { counterContext } from '../context/context'

function Login() {

    const value = useContext(counterContext)
  return (
    <div>Login {value.count}</div>
  )
}

export default Login