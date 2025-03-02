import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [name, setName] = useState("Daniel")
  const [form, setForm] = useState({email: "", phone:""})

  const handleClick = () => {
    alert("Button Clicked!")
  }

  const handleHover = () => {
    alert("You are hovering mouse on color box")
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }

  return (
    <>
     <div className="buttton">
      <button onClick={handleClick}>Click Me!</button>
     </div>

     <div className="cyan" onMouseOver={handleHover}>
      Hello You are hovering on color pallet...
     </div>

     <input type="text" name='email' className='input' value={form.email ? form.email : ""} onChange={handleChange} />
     <input type="text" name='phone' className='input' value={form.phone ? form.phone : ""} onChange={handleChange} />
    </>
  )
}

export default App
