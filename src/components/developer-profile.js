import { Container } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function DeveloperProfile() {
    return (
        <section className="developer-profile-section py-2 d-lg-none">
            <Container>
                <div className="position-relative mt-4">
                    {/* Background abstract blur */}
                    <div className="position-absolute top-50 start-50 translate-middle w-85 h-75 bg-primary opacity-10 rounded-circle" style={{ filter: "blur(60px)", zIndex: 0 }}></div>

                    {/* Code window design */}
                    <div className="position-relative z-1 w-100 code-window floating-element">
                        <div className="bg-dark rounded-4 shadow-lg overflow-hidden border border-secondary border-opacity-50 mx-auto" style={{ maxWidth: "420px" }}>
                            <div className="window-header p-3 d-flex align-items-center border-bottom border-light border-opacity-10" style={{ backgroundColor: "#1e1e1e" }}>
                                <div className="rounded-circle bg-danger me-2" style={{ width: '10px', height: '10px' }}></div>
                                <div className="rounded-circle bg-warning me-2" style={{ width: '10px', height: '10px' }}></div>
                                <div className="rounded-circle bg-success me-3" style={{ width: '10px', height: '10px' }}></div>
                                <div className="text-secondary small fw-medium font-monospace mx-auto" style={{ fontSize: '0.7rem' }}>developer-profile.js</div>
                            </div>
                            <div className="p-4 font-monospace" style={{ backgroundColor: "#282c34", color: '#abb2bf', fontSize: '0.8rem' }}>
                                <p className="mb-1"><span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>developer</span> = {'{'}</p>
                                <p className="mb-1 ms-3">name: <span style={{ color: '#98c379' }}>'Gowtham AK'</span>,</p>
                                <p className="mb-1 ms-3">role: <span style={{ color: '#98c379' }}>'Full-Stack Developer'</span>,</p>
                                <p className="mb-1 ms-3">skills: [<span style={{ color: '#98c379' }}>'React'</span>,<span style={{ color: '#98c379' }}>'Next.js'</span>,<span style={{ color: '#98c379' }}>'Node.js'</span>],</p>
                                <p className="mb-1 ms-3">hardWorker: <span style={{ color: '#d19a66' }}>true</span>,</p>
                                <p className="mb-0">{'}'};</p>
                            </div>
                        </div>

                        {/* Floating tech icons for mobile */}
                        <div className="position-absolute bg-white rounded-3 shadow p-2 d-flex align-items-center justify-content-center" style={{ top: '-15px', right: '5%', zIndex: 2, border: '1px solid #e2e8f0', width: '50px', height: '50px' }}>
                            <FaReact size={30} color="#61DAFB" />
                        </div>
                        <div className="position-absolute bg-white rounded-3 shadow p-2 d-flex align-items-center justify-content-center" style={{ bottom: '-10px', left: '5%', zIndex: 2, border: '1px solid #e2e8f0', width: '45px', height: '45px' }}>
                            <SiNextdotjs size={25} color="#000000" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
