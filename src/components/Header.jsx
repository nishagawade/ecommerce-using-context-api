import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
  return (
    <div>
      {/* <span className='header'>React Context Api</span> */}
      <ul className="nav">
        <li className="prod">
          <Link to='/'  className='navtag'>Home Page</Link>
        </li>
        <li className="prod1">
          <Link to ='cart' className='navtag'>Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header