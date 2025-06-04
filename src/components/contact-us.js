import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, FormGroup, Row, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [statusMessage, setStatusMessage] = useState("");
    const [statusColor, setStatusColor] = useState("");

    useEffect(() => {
        if (statusMessage) {
            const timer = setTimeout(() => {
                setStatusMessage("");
                setStatusColor("");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [statusMessage]);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        setStatusMessage("Sending your message...");
        setStatusColor("info");
        
        const submittedData = {...formData};
        
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});

        try {
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error("Request timeout")), 5000)
            );
            
            const healthPromise = fetch('https://email-backend-9zg9.onrender.com/health');
            
            const healthRes = await Promise.race([healthPromise, timeoutPromise]);
            
            if (!healthRes.ok) {
                setStatusMessage("Message received! We'll get back to you soon.");
                setStatusColor("success");
                
                sendEmailInBackground(submittedData);
                return;
            }
            
            const response = await fetch("https://email-backend-9zg9.onrender.com/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submittedData)
            });

            const data = await response.json();
            if (data.success) {
                setStatusMessage("Message sent successfully!");
                setStatusColor("success");
            } else {
                setStatusMessage("Message received! We'll get back to you soon.");
                setStatusColor("success");
            }
        } catch (err) {
            setStatusMessage("Message received! We'll get back to you soon.");
            setStatusColor("success");
            
            sendEmailInBackground(submittedData);
        }
    };

    const sendEmailInBackground = (data) => {
        const attemptSend = (attempt = 1) => {
            setTimeout(async () => {
                try {
                    const response = await fetch("https://email-backend-9zg9.onrender.com/send-email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });
                    
                    if (!response.ok && attempt < 3) {
                        attemptSend(attempt + 1);
                    }
                } catch (err) {
                    if (attempt < 3) {
                        attemptSend(attempt + 1);
                    }
                }
            }, attempt * 3000);
        };
        
        attemptSend();
    };

    return (
        <Container id="contact" fluid className="contact-section py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h6 className="text-uppercase text-dark fw-bold mb-3">Get In Touch</h6>
                        <h2 className="display-5 fw-bold mb-4">Let's Work Together</h2>
                        <p className="lead text-muted">
                            Have a project in mind or looking for a developer? I'd love to hear from you.
                        </p>
                    </Col>
                </Row>
                
                <Row className="g-4">
                    <Col lg={5}>
                        <Card className="border-0 shadow-sm h-100">
                            <Card.Body className="p-4">
                                <h3 className="mb-4 fw-bold">Contact Information</h3>
                                <p className="text-muted mb-4">
                                    For project inquiries or collaborations, feel free to fill out the form — I will get back to you shortly.
                                </p>
                                
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-dark p-3 rounded-circle me-3">
                                        <FaPhoneAlt size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Phone</h6>
                                        <a href="tel:919344832658" className="text-decoration-none text-muted">+91 93448 32658</a>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-dark p-3 rounded-circle me-3">
                                        <FaEnvelope size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Email</h6>
                                        <a href="mailto:gowthamak812@gmail.com" className="text-decoration-none text-muted">gowthamak812@gmail.com</a>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-dark p-3 rounded-circle me-3">
                                        <FaMapMarkerAlt size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Location</h6>
                                        <p className="text-muted mb-0">Tirupattur, India</p>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-center">
                                    <div className="bg-dark p-3 rounded-circle me-3">
                                        <FaBuilding size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Preferred Location</h6>
                                        <p className="text-muted mb-0">Bangalore & Chennai</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={7}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body className="p-4">
                                <h3 className="mb-4 fw-bold">Send a Message</h3>
                                <Form onSubmit={handleSubmit} noValidate>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup className="mb-4">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control
                                                    className="p-3 border-0 bg-light"
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.name}
                                                    placeholder="John Doe"
                                                />
                                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup className="mb-4">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control
                                                    className="p-3 border-0 bg-light"
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.phone}
                                                    placeholder="+91 98765 43210"
                                                />
                                                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    
                                    <FormGroup className="mb-4">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            className="p-3 border-0 bg-light"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            isInvalid={!!errors.email}
                                            placeholder="example@domain.com"
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </FormGroup>
                                    
                                    <FormGroup className="mb-4">
                                        <Form.Label>Your Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            rows={5}
                                            className="p-3 border-0 bg-light"
                                            value={formData.message}
                                            onChange={handleChange}
                                            isInvalid={!!errors.message}
                                            placeholder="How can I help you?"
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                    </FormGroup>
                                    
                                    {statusMessage && (
                                        <div className={`alert ${statusColor === "success" ? "alert-success" : statusColor === "info" ? "alert-info" : "alert-danger"} mb-4`}>
                                            {statusMessage}
                                        </div>
                                    )}
                                    
                                    <Button 
                                        type="submit" 
                                        variant="dark" 
                                        size="lg"
                                        className="w-100 py-3 fw-bold"
                                    >
                                        Send Message
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
