import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
    {
        id: 1,
        title: "SarvamTax",
        description: "A comprehensive GST & Compliance platform for businesses in India. Features tax filing, business registration, and financial calculators.",
        url: "https://www.sarvamtax.com/",
        image: "/images/sarvamtax-sh.png",
        tech: ["Next.js", "React", "Node.js", "AWS", "Tailwind CSS"],
        category: "FinTech"
    },
    {
        id: 2,
        title: "Krishna Builders",
        description: "Luxury real estate property portal showcasing prime residential properties in Bangalore with search and filtering capabilities.",
        url: "https://krishnabuilders.netlify.app/",
        image: "/images/krishna-builders-sh.png",
        tech: ["React.js", "Netlify", "Vite.js", "Responsive Design"],
        category: "Real Estate"
    },
    {
        id: 3,
        title: "Adroship",
        description: "Logistics solutions portfolio showcasing efficient supply chain management, transportation services, and successful delivery operations across diverse industries.",
        url: "https://adroship.vercel.app/",
        image: "/images/adroship-sh.png",
        tech: ["React", "Next.js", "Vercel", "Bootstrap", "Modern UI"],
        category: "Agency"
    }
];

function Projects() {
    return (
        <section id="projects" className="projects-section py-5">
            <Container>
                <div className="text-center mb-5 pb-3">
                    <span className="gradient-text fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '2px' }}>Portfolio Highlights</span>
                    <h2 className="display-4 fw-bolder mt-2">Recent Projects</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        A selection of my latest work, ranging from fintech platforms to real estate portals and agency websites.
                    </p>
                </div>

                <Row className="g-4">
                    {projectData.map((project) => (
                        <Col key={project.id} lg={4} md={6}>
                            <Card className="project-card border-0 h-100 shadow-sm overflow-hidden">
                                <div className="project-image-container">
                                    <Card.Img variant="top" src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-light rounded-circle shadow-sm">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                <Card.Body className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-primary fw-bold small text-uppercase tracking-wide">{project.category}</span>
                                        <div className="tech-stack-dots">
                                            {project.tech.slice(0, 3).map((t, index) => (
                                                <span key={index} className="tech-dot" title={t}></span>
                                            ))}
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold h4 mb-3">{project.title}</Card.Title>
                                    <Card.Text className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                                        {project.description}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, index) => (
                                            <Badge key={index} bg="light" className="text-secondary border fw-medium px-2 py-1">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary w-100 mt-auto d-flex align-items-center justify-content-center gap-2"
                                    >
                                        Visit Live Site <FaExternalLinkAlt size={12} />
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
