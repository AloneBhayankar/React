import React, {useEffect} from 'react'

function Navbar({color}) {
   
      // case-1 Run on every render
      useEffect(() => {
        alert("Hey I will render on every render")
      })
     
      // case-2 Run on First render
      useEffect(() => {
        alert("Hey Welcome to my Page! This is first render")
      }, [])
    
      // case-3 Run only when certain values change
      useEffect(() => {
            alert("Color was changed")
          }, [color])

      // Example of cleanup function
      useEffect(() => {
      alert("Welcome!")
        return () => {
          alert("Component Unmounted")
        }
      }, [])
      
    
  return (
    <div>I am temporary Navigation bar of this {color}.</div>
  )
}

export default Navbar