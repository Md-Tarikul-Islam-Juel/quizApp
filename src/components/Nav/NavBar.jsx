import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';
import Logo from '../../img/react-logo.png';
import Account from '../Account/Account';
import './Nav.css';

function NavBar() {
    return (
        <Nav
            className="NavBar"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Link to="/">
                    <img className="logo" src={Logo} alt="BigCo Inc. logo" />
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Account />
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;
