// ## Basic Routing without active tab styles

// import React from 'react'
// import { Link } from 'react-router-dom'
// function Navbar() {
//   return (
//     <div>
//         <nav>
//             <Link to="/"><li>Home</li></Link>
//             <Link to="/about"><li>About</li></Link>
//             <Link to="/login"><li>Login</li></Link>
//         </nav>
//     </div>
//   )
// }

// export default Navbar



//## Bavlink rotuing to provide Navlink tag to mention functionalities on isActive.

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar