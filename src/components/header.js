import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // collapse navbar on link click
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className='p-3 bg-black vw-100 position-fixed z-3'
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(prev => !prev)}
    >
      <Container className='p-0'>
        <Navbar.Brand href="#home" className='lato-bolder'>Gowtham</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='me-5 lato-bolder' href="#home" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link className='me-5 lato-bolder' href="#about" onClick={handleNavClick}>About</Nav.Link>
            <Nav.Link className='me-5 lato-bolder' href="#skills" onClick={handleNavClick}>Skills</Nav.Link>
            <Nav.Link className='me-5 lato-bolder' href="#services" onClick={handleNavClick}>Services</Nav.Link>
            <Nav.Link className='me-5 lato-bolder' href="#contact" onClick={handleNavClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
