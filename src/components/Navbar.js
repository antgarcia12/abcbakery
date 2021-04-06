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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/free">
                  Sugar/Gluten Free
                </DropdownItem>
                <DropdownItem tag={Link} to="/flavors">
                  Flavors
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/terms">
                  Policies and Disclosures
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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