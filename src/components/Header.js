import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Sid-ahmed NOUAR</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><Link to="/">Accueil</Link></li>
                    <li className="header__nav-item"><Link to="/about">À propos de moi</Link></li>
                    <li className="header__nav-item"><Link to="/services">Services</Link></li>
                    <li className="header__nav-item"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="header__nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <LanguageSwitcher />
        </header>
    );
}

export default Header;