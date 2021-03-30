import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import './Header.css';
import Logo from './media/images/abcLogo.png';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="headerBar" light expand="md">
                <NavbarBrand>
                    <a className="navbar-brand" href="/">
                        <img src={Logo} className="logo"></img>
                    </a>
                </NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Example;