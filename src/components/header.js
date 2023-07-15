import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Gatsby & Static CMS</Navbar.Brand>
          <Nav className="me-auto">            
            <Nav.Link as={Link}
              to="/"
              // style={{
              //   fontWeight: `bold`,
              //   color: `white`,
              //   textDecoration: `none`,
              // }}
            >
              Home
            </Nav.Link>           
            <Nav.Link as={Link}
              to="/categories"
              // style={{
              //   fontWeight: `bold`,
              //   color: `white`,
              //   textDecoration: `none`,
              // }}
            >
              Categories
            </Nav.Link>            
          </Nav>        
      </Container>
    </Navbar>
  </header>
)

export default Header
