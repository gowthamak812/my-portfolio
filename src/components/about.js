import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import profile from '../images/profile.jpg';
import { FaWhatsapp } from "react-icons/fa";

function About() {
    return (
        <section id="about" className="about-section py-4">
            <Container>
                <Row className="align-items-center g-4">
                    <Col lg={5} className="order-2 order-lg-1">
                        <div className="position-relative d-flex justify-content-center">
                            {/* Removed border radius here (rounded-0) */}
                            <div className="position-absolute top-0 start-0 w-100 h-100 border border-primary" style={{ zIndex: 0, marginTop: '10px', marginLeft: '10px', opacity: 0.2 }}></div>
                            <img
                                src={profile}
                                alt="Gowtham AK"
                                className="img-fluid position-relative shadow-lg"
                                style={{ zIndex: 1, objectFit: 'cover', width: '100%', border: '4px solid white', borderRadius: '0' }}
                            />
                        </div>
                    </Col>

                    <Col lg={7} className="order-1 order-lg-2">
                        <div className="ps-lg-4">
                            <span className="text-primary fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Full Stack Expertise</span>
                            <h2 className="display-4 fw-bolder mt-2 mb-3">Crafting Scalable <span className="gradient-text">Web Solutions</span></h2>

                            <p className="text-dark mb-3 fw-medium" style={{ fontSize: '0.95rem' }}>
                                I'm specialized in React.js and Next.js, with over 4 years of experience building diverse applications ranging from GST Portals to Real Estate platforms.
                            </p>

                            <p className="text-muted mb-4" style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                                My journey includes developing robust <strong>GST Portals</strong>, architecting 16+ enterprise real estate websites, and currently engineering a <strong>Portfolio SaaS product</strong>. I'm proficient in modern tech stacks including <strong>React, Next.js, MySQL, MongoDB, AWS (S3/EC2)</strong>, and more.
                            </p>

                            <p className="text-muted mb-4 fw-medium" style={{ fontSize: '0.9rem' }}>
                                🚀 <span className="text-primary">Available for Freelance Projects!</span> If you have an idea or a business website that needs modernizing, let's connect.
                            </p>

                            <Row className="g-2 mb-4">
                                <Col xs={4}>
                                    <div className="about-stat-card" style={{ borderRadius: '0' }}>
                                        <div className="num">4+</div>
                                        <div className="label">Years</div>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="about-stat-card" style={{ borderRadius: '0' }}>
                                        <div className="num">20+</div>
                                        <div className="label">Projects</div>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="about-stat-card" style={{ borderRadius: '0' }}>
                                        <div className="num">10+</div>
                                        <div className="label">AI Builds</div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="d-flex flex-nowrap gap-2">
                                <Button
                                    href="https://drive.google.com/file/d/1IdG6afpBwoFd4cgsXjzFicOSymE2opdW/view?usp=sharing"
                                    target="_blank"
                                    variant="primary"
                                    className="px-2 py-2 flex-grow-1"
                                    style={{ fontSize: '0.8rem', borderRadius: '4px' }}
                                >
                                    View Resume
                                </Button>
                                <Button
                                    href="https://wa.me/919344832658?text=Hi%20Gowtham,%20I%20came%20from%20your%20portfolio%20website.%20Let's%20speak%20about%20a%20website%20deal!"
                                    target="_blank"
                                    variant="outline-primary"
                                    className="px-2 py-2 d-flex align-items-center justify-content-center gap-1 flex-grow-1"
                                    style={{ fontSize: '0.8rem', borderRadius: '4px' }}
                                >
                                    <FaWhatsapp size={14} /> WhatsApp
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
