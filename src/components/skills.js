import { Col, Container, Image, Row, Card } from "react-bootstrap";

function Skills() {
    const skills = [
        {language:"HTML", img:"html.png"},
        {language:"CSS",  img:"css.png"},
        {language:"JavaScript",  img:"javascript.png"},
        {language:"TypeScript",  img:"typescript.png"},
        {language:"React.js",  img:"reactjs.png"},
        {language:"Redux.js",  img:"redux.png"},
        {language:"Next.js",  img:"nextjs.png"},
        {language:"Gatsby.js",  img:"gatsbyjs.png"},
        {language:"Node.js",  img:"nodejs.png"},
        {language:"MongoDB",  img:"mongodb.png"},
        {language:"Strapi.js",  img:"strapi.png"},
        {language:"Graph QL",  img:"graphql.png"},
        {language:"Bootstrap",  img:"bootstrap.png"},
        {language:"Scss",  img:"sass.png"},
        {language:"Tailwind",  img:"tailwind.png"},
        {language:"GitHub",  img:"github.png"},
        {language:"Vercel",  img:"vercel.png"},
        {language:"Netlify",  img:"netlify.png"}
    ]
    return (
        <Container id='skills' fluid className="skills-section py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <h6 className="text-uppercase text-dark fw-bold mb-3">My Expertise</h6>
                        <h2 className="display-5 fw-bold mb-4">Technical Skills</h2>
                        <p className="lead text-muted">
                            Technologies and tools I've mastered to build modern web applications
                        </p>
                    </Col>
                </Row>
                
                <Row className="skills-grid">
                    {skills && skills.map((skill, index) => (
                        <Col xs={4} sm={3} md={2} key={index} className="skill-item mb-4">
                            <Card className="border-0 h-100 skill-card">
                                <Card.Body className="text-center p-3">
                                    <div className="skill-icon-container mb-3">
                                        <Image 
                                            src={`/images/${skill.img}`} 
                                            alt={skill.language}
                                            className="skill-icon"
                                        />
                                    </div>
                                    <p className="skill-name mb-0">{skill.language}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Skills;
