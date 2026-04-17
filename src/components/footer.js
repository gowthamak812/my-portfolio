import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer pt-5 pb-4">
            {/* WhatsApp Floating Button */}
            <a href="https://wa.me/919344832658?text=Hi%20Gowtham,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity!" className="whatsapp-float" target="_blank" rel="noreferrer">
                <FaWhatsapp />
            </a>

            <Container>
                {/* Available for opportunities section */}
                <Row className="mb-3 justify-content-center text-center border-bottom border-light border-opacity-75 pb-5">
                    <Col md={8}>
                        <Badge bg="primary" text="light" className="mb-3 px-3 py-2 rounded-pill shadow-sm" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                            <span className="me-2 text-warning">●</span> Available for new opportunities
                        </Badge>
                        <h2 className="display-6 fw-bold mb-3 text-dark">Let's build something amazing together</h2>
                        <p className="lead mb-4 mx-auto text-muted" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                            Currently looking for new roles where I can contribute my frontend expertise to challenging projects.
                        </p>
                        <Button href="#contact" variant="primary" className="rounded-pill px-4 py-2 fw-bold shadow-sm">
                            Start a Conversation
                        </Button>
                    </Col>
                </Row>
                <hr />
                {/* Main Footer Content */}
                <Row className="gy-4 mt-2 align-items-center justify-content-between">
                    <Col md={4} className="text-center text-md-start">
                        <h4 className="inter-bolder mb-0 text-dark">Gowtham AK</h4>
                        <p className="text-muted mt-2 mb-0" style={{ fontSize: "0.9rem" }}>
                            Frontend-Heavy Full Stack Developer
                        </p>
                    </Col>

                    <Col md={4} className="text-center">
                        <div className="d-flex justify-content-center gap-4">
                            <a href="https://linkedin.com/in/gowtham-ak-reactjs-developer/" target="_blank" rel="noreferrer" className="social-link linkedin">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/gowthamak812?tab=repositories" target="_blank" rel="noreferrer" className="social-link github">
                                <FaGithub size={20} />
                            </a>
                            <a href="mailto:gowthamak812@gmail.com" className="social-link email">
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </Col>

                    <Col md={4} className="text-center text-md-end">
                        <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                            &copy; {new Date().getFullYear()} Gowtham AK.
                            <br />Made with <FaHeart className="text-danger mx-1" size={14} /> using React.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
