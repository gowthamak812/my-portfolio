import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaTimes, FaBars } from 'react-icons/fa';

function Header() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [expanded]);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="header-main p-2 p-md-3"
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* Brand/Logo */}
          <Navbar.Brand href="#home" className="ms-0">
            <div className="inter-bolder" style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>GOWTHAM <span className="text-primary">AK</span></div>
          </Navbar.Brand>

          {/* CENTER SECTION FOR DESKTOP */}
          <Nav className="d-none d-lg-flex flex-row gap-4 align-items-center">
            <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#about" className="fw-bold">About</Nav.Link>
            <Nav.Link href="#skills" className="fw-bold">Skills</Nav.Link>
            <Nav.Link href="#experience" className="fw-bold">Experience</Nav.Link>
            <Nav.Link href="#projects" className="fw-bold">Projects</Nav.Link>
            <Nav.Link href="#contact" className="fw-bold">Contact</Nav.Link>
          </Nav>

          {/* TOGGLER FOR MOBILE */}
          <div className="burger-icon d-lg-none ms-3" onClick={toggleMenu} style={{ fontSize: '1.3rem' }}>
            {expanded ? <FaTimes /> : <FaBars />}
          </div>
        </Container>
      </Navbar>

      {/* Modern Minimal Numbered Overlay */}
      <div className={`kings-menu-overlay ${expanded ? 'show' : ''}`}>
        <Container className="menu-inner h-100 py-5">
          <Nav className="flex-column mt-5">
            <Nav.Link href="#home" onClick={closeMenu}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={closeMenu}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={closeMenu}>Skills</Nav.Link>
            <Nav.Link href="#experience" onClick={closeMenu}>Experience</Nav.Link>
            <Nav.Link href="#projects" onClick={closeMenu}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={closeMenu}>Contact</Nav.Link>
          </Nav>
        </Container>
      </div>
    </>
  );
}

export default Header;
