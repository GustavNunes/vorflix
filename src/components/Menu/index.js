import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
//import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href='/'>
            <img className="Logo" src={Logo} alt='Vorflix Logo'/>
            </a>
            <Button as='a' href='/' className='ButtonLink'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;