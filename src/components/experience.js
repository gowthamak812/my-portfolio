import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function Experience() {
    return (
        <section id="experience" className="experience-section py-5">
            <Container>
                <div className="text-center mb-5 pb-3">
                    <span className="gradient-text fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '2px' }}>Career Path</span>
                    <h2 className="display-4 fw-bolder mt-2">Work & Education</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        My professional journey and academic background presented as a timeline.
                    </p>
                </div>

                <Row className="g-5">
                    {/* Experience - 60% approx (7/12) */}
                    <Col lg={7}>
                        <h3 className="mb-5 d-flex align-items-center fw-bold">
                            <div className="icon-gradient-container me-3">
                                <FaBriefcase size={22} />
                            </div>
                            Professional Experience
                        </h3>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker">1</div>
                                <div className="timeline-content">
                                    <div className="exp-card">
                                        <div className="exp-date">Nov 2022 – Present</div>
                                        <h4 className="fw-bold mb-1">Software Engineer</h4>
                                        <div className="text-primary fw-semibold mb-3">Nurtur Tech India Pvt Ltd</div>
                                        <ul className="text-muted ps-3 mb-0 small" style={{ lineHeight: '1.6' }}>
                                            <li className="mb-2">Developed and maintained 16+ responsive real estate websites using React.js, Next.js, and Gatsby.js.</li>
                                            <li className="mb-2">Migrated multiple client applications from PHP to Next.js, improving code maintainability and performance.</li>
                                            <li className="mb-2">Converted CSR pages to SSR with Next.js, significantly boosting SEO and initial load speeds.</li>
                                            <li>Optimized performance using lazy loading, code splitting, and memoization techniques.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker">2</div>
                                <div className="timeline-content">
                                    <div className="exp-card">
                                        <div className="exp-date">April 2022 – Oct 2022</div>
                                        <h4 className="fw-bold mb-1">Junior Software Engineer</h4>
                                        <div className="text-primary fw-semibold mb-3">Starberry Pvt Ltd</div>
                                        <ul className="text-muted ps-3 mb-0 small" style={{ lineHeight: '1.6' }}>
                                            <li className="mb-2">Developed interactive real estate web applications using React.js and Gatsby.js.</li>
                                            <li className="mb-2">Integrated REST APIs and CMS-managed content into frontend applications.</li>
                                            <li>Gained hands-on experience with component-based architecture and responsive design.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Education - 40% approx (5/12) */}
                    <Col lg={5}>
                        <h3 className="mb-5 d-flex align-items-center fw-bold">
                            <div className="icon-gradient-container me-3">
                                <FaGraduationCap size={22} />
                            </div>
                            Education
                        </h3>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker">3</div>
                                <div className="timeline-content">
                                    <div className="exp-card">
                                        <div className="exp-date">July 2017 – Aug 2021</div>
                                        <h4 className="fw-bold mb-1">Bachelor of Engineering (ECE)</h4>
                                        <div className="text-primary fw-semibold mb-2">PSV College of Engineering</div>
                                        <p className="text-muted mb-0 small">
                                            Graduated with a focus on electronic systems and foundational programming, achieving 78% aggregate.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker">4</div>
                                <div className="timeline-content">
                                    <div className="exp-card">
                                        <div className="exp-date">Oct 2021 - Dec 2021</div>
                                        <h4 className="fw-bold mb-1">MERN Stack Specialization</h4>
                                        <div className="text-primary fw-semibold mb-2">Qtree Technologies</div>
                                        <p className="text-muted mb-0 small">
                                            Immersive professional training in MongoDB, Express, React, and Node.js ecosystems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;
