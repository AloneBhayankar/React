import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply, incrementByAmount } from './counter/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <>
    <Navbar />
      <div>
      <button onClick={() => dispatch(multiply())}>*</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+ Single</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>+ Double</button>
      </div>
    </>
  )
}

export default App
