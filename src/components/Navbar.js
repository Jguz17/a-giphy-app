import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo-container'>
                <img src={require('../images/giphy-logo.svg')} alt=''/>
                <h1>A GIPHY APP</h1>
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar