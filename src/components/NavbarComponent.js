import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
  Button,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" color="dark" dark expand="md">
        <Container>
          <NavbarBrand>
            <BrowserRouter>
              <Link to={"/"}>D2Y CODING</Link>
            </BrowserRouter>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://adimunawar31.github.io" target="_blank">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/AdiMunawar31" target="_blank">
                  My GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Admin</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
