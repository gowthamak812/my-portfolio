import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, FormGroup, Row, Table } from "react-bootstrap";

function Contact() {
    // State for form inputs
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
            }, 5000); // 5000 ms = 5 seconds

            return () => clearTimeout(timer); // cleanup if component unmounts or statusMessage changes
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

        try {
            // Ping health endpoint first
            const healthRes = await fetch('https://email-backend-9zg9.onrender.com/health');
            if (!healthRes.ok) {
                setStatusMessage("Server is currently unavailable. Please try again later.");
                return;
            }
            const response = await fetch("https://email-backend-9zg9.onrender.com/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.success) {
                setStatusMessage("Message sent successfully!");
                setStatusColor("success");
                setFormData({ name: "", phone: "", email: "", message: "" });
                setErrors({});
            } else {
                setStatusMessage("Failed to send message due to a server error. Please try again later.");
                setStatusColor("error");
            }
        } catch (err) {
            console.error(err);
            setStatusMessage("Something went wrong. Please try again later.");
            setStatusColor("error");
        }
    };


    return (
        <Container id="contact" fluid className="contact-section">
            <Row>
                <Col sm={12} md={5} className="p-3 p-md-5">
                    <h1>Contact us</h1>
                    <p className="d-none d-md-block">
                        For project inquiries or collaborations, feel free to fill out the form — I will get back to you shortly.
                    </p>
                    <p>If you’re reaching out regarding job opportunities, please contact me using the details below.</p>
                    <div className="portfolio-section">
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>
                                        <pre>
                                            : <a href="tel:919344832658">9344832658</a>
                                        </pre>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <pre>
                                            : <a href="mailto:gowthamak812@gmail.com">gowthamak812@gmail.com</a>
                                        </pre>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>
                                        <pre>: Tirupattur, India</pre>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Preferred location</td>
                                    <td>
                                        <pre>: Banglore & Chennai</pre>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col sm={12} md={7} className="p-3 p-md-5">
                    <p className="d-block d-md-none">
                        For project inquiries or collaborations, feel free to fill out the form — I will get back to you shortly.
                    </p>
                    <Form onSubmit={handleSubmit} noValidate>
                        <FormGroup className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className="p-3"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                className="p-3"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>

                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className="p-3"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                        </FormGroup>
                        {statusMessage && (
                            <p className={`mt-3 ${statusColor === "success" ? "text-success" : "text-danger"}`}>
                                {statusMessage}
                            </p>
                        )}
                        <Button type="submit" variant="dark" className="mt-3 py-2 px-4">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;