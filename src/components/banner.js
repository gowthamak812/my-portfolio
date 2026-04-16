import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import { FaReact, FaNodeJs, FaRocket, FaAward, FaCalendarCheck } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import DeveloperProfile from "./developer-profile";

export default function Banner() {
    return (
        <section id="home" className="banner-section">
            <Container className="pt-3 mt-3 mt-md-5 pt-md-5">
                <Row className="align-items-center justify-content-between">
                    <Col lg={6} className="banner-content pe-lg-5">
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="profile-wrapper position-relative">
                                <Image
                                    src={"/images/profile2.jpg"}
                                    roundedCircle
                                    className="banner-profile-img border border-white shadow-sm"
                                    style={{ width: '65px', height: '65px', objectFit: 'cover' }}
                                />
                                <div className="online-indicator"></div>
                            </div>
                            <div>
                                <div className="text-secondary fw-bold text-uppercase small mb-1" style={{ letterSpacing: '1px' }}>Full Stack Engineer</div>
                                <div className="availability-badge">
                                    <div className="availability-dot"></div>
                                    Actively Available
                                </div>
                            </div>
                        </div>

                        <h1 className="display-2 inter-bolder text-dark mb-4 hero-title">
                            Engineering <span className="gradient-text">Exceptional</span><br />
                            <span className="typed-specialist">
                                <ReactTyped
                                    strings={["Web Experiences", "MERN Stack Solutions", "SaaS Products"]}
                                    typeSpeed={80}
                                    loop
                                    backSpeed={40}
                                    className="gradient-text"
                                />
                            </span>
                        </h1>

                        <p className="lead text-muted mb-5 hero-lead" style={{ maxWidth: '90%' }}>
                            I'm <span className="text-dark fw-bold">Gowtham AK</span>, specializing in React.js & Next.js to deliver high-performance, enterprise-grade web applications with a focus on <span className="text-primary fw-medium">SEO & Scalability</span>.
                        </p>

                        <div className="banner-cta-buttons d-flex gap-3 mb-3">
                            <Button href="#contact" variant="primary" className="px-4 py-3 rounded-3 shadow-lg inter-bold d-flex align-items-center justify-content-center gap-2 flex-grow-1" style={{ borderRadius: '12px !important' }}>
                                Start a Project
                            </Button>
                            <Button href="#experience" variant="outline-primary" className="px-4 py-3 rounded-3 shadow-sm inter-bold bg-white text-primary border-2 flex-grow-1" style={{ borderRadius: '12px !important' }}>
                                View Methodology
                            </Button>
                        </div>

                        <div className="stat-container">
                            <div className="stat-item">
                                <FaRocket className="stat-icon" />
                                <span>20+ Projects</span>
                            </div>
                            <div className="stat-item">
                                <FaAward className="stat-icon" />
                                <span>Top Rated</span>
                            </div>
                            <div className="stat-item">
                                <FaCalendarCheck className="stat-icon" />
                                <span>4+ Yrs Exp</span>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} className="d-none d-lg-block position-relative mt-5 mt-lg-0 desktop-profile-col">
                        {/* Background abstract blur */}
                        <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 bg-primary opacity-25 rounded-circle" style={{ filter: "blur(80px)", transform: "scale(1.2)", zIndex: 0 }}></div>

                        {/* floating tech related design */}
                        <div className="position-relative z-1 floating-element w-100">
                            <div className="bg-dark rounded-4 shadow-lg overflow-hidden border border-secondary border-opacity-50" style={{ transform: "rotate(-2deg)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
                                <div className="window-header p-3 d-flex align-items-center border-bottom border-light border-opacity-10" style={{ backgroundColor: "#1e1e1e" }}>
                                    <div className="rounded-circle bg-danger me-2" style={{ width: '12px', height: '12px' }}></div>
                                    <div className="rounded-circle bg-warning me-2" style={{ width: '12px', height: '12px' }}></div>
                                    <div className="rounded-circle bg-success me-3" style={{ width: '12px', height: '12px' }}></div>
                                    <div className="text-secondary small fw-medium font-monospace mx-auto">developer-profile.js</div>
                                </div>
                                <div className="p-4 p-lg-5 font-monospace fs-6" style={{ backgroundColor: "#282c34", color: '#abb2bf' }}>
                                    <p className="mb-2"><span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>developer</span> <span style={{ color: '#56b6c2' }}>=</span> {'{'}</p>
                                    <p className="mb-2 ms-4">name: <span style={{ color: '#98c379' }}>'Gowtham AK'</span>,</p>
                                    <p className="mb-2 ms-4">role: <span style={{ color: '#98c379' }}>'Full-Stack Developer'</span>,</p>
                                    <p className="mb-2 ms-4">skills: [<span style={{ color: '#98c379' }}>'React'</span>, <span style={{ color: '#98c379' }}>'Next.js'</span>, <span style={{ color: '#98c379' }}>'Node.js'</span>],</p>
                                    <p className="mb-2 ms-4">hardWorker: <span style={{ color: '#d19a66' }}>true</span>,</p>
                                    <p className="mb-2 ms-4">problemSolver: <span style={{ color: '#d19a66' }}>true</span>,</p>
                                    <p className="mb-2 ms-4">hireable: <span style={{ color: '#c678dd' }}>function</span>() {'{'}</p>
                                    <p className="mb-2 ms-5"><span style={{ color: '#c678dd' }}>return</span> <span style={{ color: '#d19a66' }}>true</span>;</p>
                                    <p className="mb-2 ms-4">{'}'}</p>
                                    <p className="mb-0">{'}'};</p>
                                </div>
                            </div>

                            {/* Floating tech icons */}
                            <div className="position-absolute floating-element-delay bg-white rounded-4 shadow-lg p-3 d-flex align-items-center justify-content-center" style={{ top: '-10%', right: '0%', zIndex: 2, border: '1px solid #e2e8f0', width: '80px', height: '80px' }}>
                                <FaReact size={48} color="#61DAFB" />
                            </div>
                            <div className="position-absolute floating-element bg-white rounded-4 shadow-lg p-3 d-flex align-items-center justify-content-center" style={{ bottom: '10%', left: '-10%', zIndex: 2, border: '1px solid #e2e8f0', width: '70px', height: '70px', animationDelay: '1s' }}>
                                <SiNextdotjs size={40} color="#000000" />
                            </div>
                            <div className="position-absolute floating-element-delay bg-white rounded-4 shadow-lg p-2 d-flex align-items-center justify-content-center" style={{ bottom: '-5%', right: '15%', zIndex: 2, border: '1px solid #e2e8f0', width: '60px', height: '60px' }}>
                                <FaNodeJs size={34} color="#339933" />
                            </div>
                        </div>
                    </Col>
                    <DeveloperProfile />
                </Row>
            </Container>
        </section>
    );
}