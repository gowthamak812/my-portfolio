import { Col, Container, Image, Row } from "react-bootstrap";

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
        <Container id='skills' fluid className="skills-section">
            <Container>
            <h2>Skills</h2>
            <Row className="flex">
                {skills && skills.map((skill, index)=>{
                    return (
                        <Col xs={2} sm={2} md={1} key={index}>
                            <Image className="p-1" src={`/images/${skill.img}`} />
                            <p className="text-center mt-3">{skill.language}</p>
                        </Col>
                    );
                })}
            </Row>
            </Container>
        </Container>
    );
}

export default Skills;
