import React from 'react';
import Logo from '../Common/Logo';
import './style.css';


const Header = ({ handleScrollMenu }) => {
    return (
        <header>
            <div className='header-content'>
                <Logo />
                <div className='content-main'>
                    <h1>Delicious food for your cravings</h1>
                    <p>We made fresh and healthy meals with different recipes</p>
                    <button onClick={handleScrollMenu}>
                        View Menu <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
            <img className='header-img' src="https://foodandnutrition.org/wp-content/uploads/MGT-South-India-780x520.jpg" alt='banner' />
        </header>
    )
}

export default Header
