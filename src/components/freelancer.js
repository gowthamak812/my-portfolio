import { Button, Container, Image } from "react-bootstrap";

function Freelancer() {

    return (
        <Container id='contact' className="p-0 freelancer-section position-relative">
            {/* Image with dark overlay */}
            <div className="position-relative">
                <Image
                    src="https://cdn.pixabay.com/photo/2020/11/05/08/10/laptop-5714421_640.jpg"
                    alt="Laptop"
                    className="img-fluid"
                />
                {/* Dark overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: "rgba(3, 14, 70, 0.75)",
                        zIndex: 1
                    }}
                />
            </div>

            {/* Text content with higher z-index */}
            <div
                className="freelance-content position-absolute top-50 start-50 translate-middle text-center"
                style={{
                    zIndex: 2,
                    color: "white" // Ensure text is bright
                }}
            >
                <h2>Ready for New Opportunities</h2>
                <a href="tel:919344832658">
                    <Button variant="light" className="mt-3">Hire me</Button>
                </a>
            </div>
        </Container>
    );
}

export default Freelancer;
