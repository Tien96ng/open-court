import React, { useState } from 'react';
import SignIn from './SignIn';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';

export default function NavMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavBar = () => setCollapsed(prev => !prev);

  return(
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/" id="homeBtn-text">Open Court</NavbarBrand>
          <NavbarToggler onClick={toggleNavBar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
              <NavItem>
                <SignIn id="signIn-btn"/>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}