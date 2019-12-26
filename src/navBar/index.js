
import React, { useState } from 'react';
import { navigateToUrl } from 'single-spa';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Micro Front End</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/angularJS" onClick={navigateToUrl} >Angular Js</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/react" onClick={navigateToUrl} >React Js</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/angularTs" onClick={navigateToUrl} >Angular</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>SingleSpa app</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;