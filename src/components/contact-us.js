import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import emailjs from '@emailjs/browser';

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

        // Template parameters based on your EmailJS template screenshot
        const templateParams = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            title: "New Inquiry from Portfolio" // This fills the {{title}} in your subject line
        };

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            setStatusMessage("Message sent successfully!");
            setStatusColor("success");
            setFormData({ name: "", phone: "", email: "", message: "" });
            setErrors({});
        } catch (err) {
            console.error("EmailJS Error:", err);
            setStatusMessage("Failed to send message. Please try again later.");
            setStatusColor("danger");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <Container>
                <div className="text-center mb-5">
                    <span className="gradient-text fw-bold text-uppercase tracking-wider">Get In Touch</span>
                    <h2 className="display-4 fw-bolder mt-2 mb-4">Let's Work Together</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        Have a project in mind, looking for a developer, or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <Row className="g-5">
                    <Col lg={5}>
                        <div className="contact-card h-100">
                            <h3 className="mb-4 inter-bold">Contact Information</h3>
                            <p className="text-muted mb-5">
                                For project inquiries or collaborations, feel free to fill out the form — I will get back to you shortly.
                            </p>

                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-gradient-container me-4">
                                    <FaPhoneAlt size={16} />
                                </div>
                                <div>
                                    <h6 className="inter-bold mb-1">Phone</h6>
                                    <a href="tel:919344832658" className="text-decoration-none text-muted">+91 93448 32658</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-gradient-container me-4">
                                    <FaEnvelope size={16} />
                                </div>
                                <div>
                                    <h6 className="inter-bold mb-1">Email</h6>
                                    <a href="mailto:gowthamak812@gmail.com" className="text-decoration-none text-muted">gowthamak812@gmail.com</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-gradient-container me-4">
                                    <FaMapMarkerAlt size={16} />
                                </div>
                                <div>
                                    <h6 className="inter-bold mb-1">Location</h6>
                                    <p className="text-muted mb-0">Tirupattur, India</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="icon-gradient-container me-4">
                                    <FaBuilding size={16} />
                                </div>
                                <div>
                                    <h6 className="inter-bold mb-1">Preferred Location</h6>
                                    <p className="text-muted mb-0">Bangalore (Immediate Relocation) & Chennai</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div className="contact-card h-100">
                            <h3 className="mb-4 inter-bold">Send a Message</h3>
                            <Form onSubmit={handleSubmit} noValidate>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup className="mb-4">
                                            <Form.Label className="fw-semibold text-dark">Full Name</Form.Label>
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                isInvalid={!!errors.name}
                                                placeholder="Enter your name"
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-4">
                                            <Form.Label className="fw-semibold text-dark">Phone Number</Form.Label>
                                            <Form.Control
                                                className="form-control"
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                isInvalid={!!errors.phone}
                                                placeholder="Enter your mobile numder"
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormGroup className="mb-4">
                                    <Form.Label className="fw-semibold text-dark">Email Address</Form.Label>
                                    <Form.Control
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                        placeholder="Enter your email"
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </FormGroup>

                                <FormGroup className="mb-4">
                                    <Form.Label className="fw-semibold text-dark">Your Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        rows={4}
                                        className="form-control"
                                        value={formData.message}
                                        onChange={handleChange}
                                        isInvalid={!!errors.message}
                                        placeholder="Enter your message"
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                </FormGroup>

                                {statusMessage && (
                                    <div className={`alert ${statusColor === "success" ? "alert-success" : statusColor === "info" ? "alert-info" : "alert-danger"} mb-4 border-0 shadow-sm rounded-3`}>
                                        {statusMessage}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-100 py-3 fw-bold rounded-3 shadow-sm"
                                >
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
