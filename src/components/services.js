import { Col, Container, Image, Row, Card } from "react-bootstrap";

function Services() {
    const services = [
        {name: "Web Development", img: "web-development.jpg", description: "We create fast, scalable, and user-friendly websites using React.js, tailored to your needs."},
        {name: "Mobile App Development", img: "mobile-app-development.jpg", description: "Build cross-platform mobile apps with React Native that work seamlessly on both iOS and Android."},
        {name: "E-Commerce App", img: "e-commerce-app.webp", description: "Develop fully functional e-commerce platforms with secure checkout systems and smooth product browsing."},
        {name: "Real-Time Apps", img: "real-time-app.jpg", description: "Create apps with real-time features like chat, notifications, or live updates for an engaging user experience."},
        {name: "Performance Optimization", img: "performance-optimization.jpg", description: "We improve your app's speed by optimizing code, reducing load times, and making it more efficient."},
        {name: "Portfolio Website", img: "portfolio-website.jpg", description: "Showcase your work with a professional, responsive, and easy-to-navigate portfolio website built with React."},
        {name: "Custom Website", img: "custom-website.jpeg", description: "Build custom websites that match your unique brand and business goals, from simple landing pages to complex sites."}
    ];
    
    return (
        <Container id='services' fluid className="services-section py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h6 className="text-uppercase text-dark fw-bold mb-3">What I Offer</h6>
                        <h2 className="display-5 fw-bold mb-4">My Services</h2>
                        <p className="lead text-muted">
                            Specialized solutions to help your business grow with modern web technologies
                        </p>
                    </Col>
                </Row>
                
                <Row className="g-4">
                    {services && services.map((service, index) => (
                        <Col xs={12} sm={12} md={6} lg={4} key={index}>
                            <Card className="border-0 shadow-sm h-100 service-card">
                                <div className="image-container">
                                    <Image 
                                        className="card-img-top" 
                                        src={`/images/${service.img}`} 
                                        alt={service.name}
                                        style={{ height: "220px", objectFit: "cover" }}
                                    />
                                </div>
                                <Card.Body className="p-4 text-center">
                                    <Card.Title className="lato-bold mb-3">{service.name}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Services;
