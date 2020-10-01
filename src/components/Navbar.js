import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo-container'>
                <img src={require('../images/giphy-logo.svg')} alt=''/>
                <h1>A GIPHY APP</h1>
            </div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
            </ul>
        </div>
    )
}

export default Navbar