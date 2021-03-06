import React, { useState, useContext } from 'react';
import { Context } from '../context/appContext';
import SignIn from './SignIn';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../css/NavMenu.css';

export default function NavMenu() {
  const { user } = useContext(Context);
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavBar = () => setCollapsed(prev => !prev);

  return(
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow bgc-white" light fixed="top">
        <Container>
          <NavbarBrand tag={Link} to="/" id="homeBtn-text"><img src={logo} width="20" alt="website logo"/>OpenCourt</NavbarBrand>
          <NavbarToggler onClick={toggleNavBar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow font-weight-bold">
              {user === null ? "" : 
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Add a Court</NavLink>
                </NavItem>
              }
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/court-list">Court List</NavLink>
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