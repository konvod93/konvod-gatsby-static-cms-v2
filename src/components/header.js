import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              fontWeight: `bold`,
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </header>
)

export default Header
