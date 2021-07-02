import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return( 

    <div className='header'>
        <Link to='/' className="logp-container">
            <img className="logo" src="https://th.bing.com/th/id/OIP.ZXwyYhJIWsLHaXnd4HEX-wHaEU?pid=ImgDet&w=543&h=317&rs=1" alt="logo" />
        </Link>

        <div className="options">
            <Link className="options" to='/shop'>
                    SHOP
            </Link>

            <Link className="option" to='/shop '>
                    CONTACT
            </Link>
        </div>

        </div>
    )
    
}


export default Header;