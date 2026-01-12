import { Button, Col, Container, Image, Row } from "react-bootstrap";
import profile from '../images/profile.jpg'
function About() {
    return (
        <div id='about'>
            <Container>
                <Row className="about-section">
                    <Col lg={5}>
                        <Image alt='profile' src={profile} />
                    </Col>
                    <Col lg={7}>
                        <div className="col-12 col-md-12 col-lg-8 m-auto mt-5">
                            <h2>React.js Developer – Building Modern Web Apps & Portals</h2>
                            <p>I'm <strong>Gowtham AK</strong>, a passionate and results-driven <strong>React.js Developer</strong> with <strong>3+</strong> years of experience building high-performance, scalable, and user-friendly web applications. I specialize in creating modern, responsive UI/UX designs and reusable React components that deliver seamless user experiences.</p>
                            <p>I’ve worked on over 10+ real estate and business websites, optimizing performance, integrating APIs, and implementing advanced state management using <strong>Redux</strong> and <strong>Context API</strong>. With a solid understanding of <strong>React Hooks</strong>, routing, and component lifecycle, I bring efficiency, maintainability, and clean code practices to every project.</p>
                            <p>I'm deeply committed to building clean, efficient, and user-friendly interfaces, with a focus on performance, scalability, and modern development practices. I enjoy solving real-world problems through code and delivering impactful digital experiences.</p>
                            <p>In addition to my full-time role, I also share my knowledge as a part-time trainer, guiding aspiring developers in mastering web technologies. I’m constantly exploring new tools and trends in the frontend ecosystem to stay ahead and deliver top-tier solutions.</p>
                            <p>For a detailed overview of my professional experience and technical skills, feel free to view my resume.</p>
                            <Button variant="dark" href='https://drive.google.com/file/d/182BSx8xnH661QbemaHlLvK_bmxIiZ2-b/view' target='blank' className="mt-3">View My Resume</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
