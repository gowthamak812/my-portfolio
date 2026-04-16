import { Col, Container, Row } from "react-bootstrap";
import { FaReact, FaNodeJs, FaHtml5, FaSass, FaBootstrap, FaGithub, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiGatsby, SiTypescript, SiJavascript, SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiStrapi, SiGraphql, SiVercel, SiNetlify } from "react-icons/si";

function Skills() {
    const allSkills = [
        { name: "React.js", category: "Frontend", icon: <FaReact color="#61DAFB" /> },
        { name: "Next.js", category: "Frontend", icon: <SiNextdotjs color="#000000" /> },
        { name: "Gatsby.js", category: "Frontend", icon: <SiGatsby color="#663399" /> },
        { name: "TypeScript", category: "Frontend", icon: <SiTypescript color="#3178C6" /> },
        { name: "JavaScript", category: "Frontend", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Redux", category: "Frontend", icon: <SiRedux color="#764ABC" /> },
        { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "Bootstrap 5", category: "Frontend", icon: <FaBootstrap color="#7952B3" /> },
        { name: "Sass", category: "Style", icon: <FaSass color="#CC6699" /> },
        { name: "HTML5/CSS3", category: "Style", icon: <FaHtml5 color="#E34F26" /> },
        { name: "Node.js", category: "Backend", icon: <FaNodeJs color="#339933" /> },
        { name: "Express.js", category: "Backend", icon: <SiExpress color="#000000" /> },
        { name: "MongoDB", category: "Database", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", category: "Database", icon: <SiMysql color="#4479A1" /> },
        { name: "GraphQL", category: "API", icon: <SiGraphql color="#E10098" /> },
        { name: "Strapi CMS", category: "Backend", icon: <SiStrapi color="#2E7EEA" /> },
        { name: "AWS S3/EC2", category: "Cloud", icon: <FaAws color="#FF9900" /> },
        { name: "GitHub", category: "Tools", icon: <FaGithub color="#181717" /> },
        { name: "Vercel", category: "Tools", icon: <SiVercel color="#000000" /> },
        { name: "Netlify", category: "Tools", icon: <SiNetlify color="#00C7B7" /> }
    ];

    return (
        <section id="skills" className="skills-section">
            {/* Wave Divider */}
            <div className="section-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <Container>
                <div className="text-center md:mb-5 md:pb-5">
                    <span className="text-primary fw-bold text-uppercase tracking-wider" style={{ letterSpacing: '2.5px' }}>Mastered Stack</span>
                    <h2 className="display-4 fw-bolder mt-2 mb-4">Technical Expertise</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: "650px" }}>
                        I use the industry-leading standards to bridge the gap between complex backend architectures and sleek user interfaces.
                    </p>
                </div>

                <Row className="g-3 g-lg-5">
                    {allSkills.map((skill, index) => (
                        <Col key={index} xs={4} md={4} lg={3} xl={2}>
                            <div className="skill-card">
                                <div className="skill-icon">
                                    {skill.icon}
                                </div>
                                <div className="skill-name">
                                    {skill.name}
                                </div>
                                <div className="skill-category">
                                    {skill.category}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
