import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
import './Navbar.css';

const Main = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="subNav" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <div className="links">
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
          </div>

          <div className="links">
            <NavItem>
              <NavLink tag={Link} to="/aboutus">About</NavLink>
            </NavItem>
          </div>

          <div className="links">
            <NavItem>
              <NavLink tag={Link} to="/gallery">Gallery</NavLink>
            </NavItem>
          </div>

          <div className="links">
            <NavItem>
              <NavLink tag={Link} to="/contactsection">Contact Us</NavLink>
            </NavItem>
          </div>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Main;