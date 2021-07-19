import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/media/pictures/logo.png';

const Nav = () => {
    return (
        <nav>
            <Link><img src={Logo} alt="Education.com" /></Link>
        </nav>
    )
}

export default Nav
