import React from 'react';
import logo from './logo.jpg';
import './style.css';

const Logo = () => {
    return (
        <div className='header-content_logo'>
            <div>
                <img src={logo} alt='logo' /><br />
                <span>
                    <b>Pedal Palate</b>
                </span>
            </div>
            <p>
                <b>Instant Delivery</b>
            </p>
        </div>
    )
}

export default Logo
