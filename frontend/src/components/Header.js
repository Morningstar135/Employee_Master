import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="position-relative">
        <div className="position-absolute top-0 start-50 translate-middle">
          <Link to='/'> <h1 className='pt-3 m-3' id='head'>Employee Master</h1> </Link>
        </div>
    </div>  
    )
}

export default Header