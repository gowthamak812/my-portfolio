import { Col, Container, Image, Row } from "react-bootstrap";

function Services() {
    const services = [
        {name: "Web Development", img: "web-development.jpg", discription: "We create fast, scalable, and user-friendly websites using React.js, tailored to your needs."},
        {name: "Mobile App Development", img: "mobile-app-development.jpg", discription: "Build cross-platform mobile apps with React Native that work seamlessly on both iOS and Android."},
        {name: "E-Commerce App", img: "e-commerce-app.webp", discription: "Develop fully functional e-commerce platforms with secure checkout systems and smooth product browsing."},
        {name: "Real-Time Apps", img: "real-time-app.jpg", discription: "Create apps with real-time features like chat, notifications, or live updates for an engaging user experience."},
        {name: "Performance Optimization", img: "performance-optimization.jpg", discription: "We improve your app's speed by optimizing code, reducing load times, and making it more efficient."},
        {name: "Portfolio Website", img: "portfolio-website.jpg", discription: "Showcase your work with a professional, responsive, and easy-to-navigate portfolio website built with React."},
        {name: "Custom Website", img: "custom-website.jpeg", discription: "Build custom websites that match your unique brand and business goals, from simple landing pages to complex sites."}
    ];
    return (
        <Container id='services' fluid className="services-section z-1 mt-5">
            <Container>
            <h2>My Services</h2>
            <Row>
                {services && services.map((service, index)=>{
                    return (
                        <Col xs={12} sm={12} md={6} lg={4} key={index}>
                            <div className="image-container">
                            <Image className="w-100" src={`/images/${service.img}`} />
                                </div>
                            <h5 className="lato-bold text-center mt-3">{service.name}</h5>
                            <p className="text-center">{service.discription}</p>
                        </Col>
                    );
                })}
            </Row>
            </Container>
        </Container>
    );
}

export default Services;
