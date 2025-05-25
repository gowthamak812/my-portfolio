import React from "react";
import { Container } from "react-bootstrap";
import { ReactTyped } from "react-typed";

export default function Banner() {
    return (
        <Container id='home' className="p-0 w-100 h-100 banner-section position-relative" style={{ minHeight: "100vh" }}>
            {/* Image with dark overlay */}
            <div className="position-relative w-100 h-100">
                {/* Dark overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: "rgba(23, 24, 29, 0.75)",
                        zIndex: 1
                    }}
                />
                {/* Image */}
                <div style={{ minHeight: "100vh", position: "relative" }}>
                    {/* Image */}
                    <img
                        alt="Banner"
                        className="min-vh-100 w-100 h-100"
                        src="/static/media/banner.16791bcedb713299b906.jpg"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Content section */}
            <div className="content-section position-absolute top-50 start-50 translate-middle text-center text-white z-2 w-100 px-3 m-0">
                <h3>Welcome to my Portfolio!</h3>
                <h1 className="lato-bolder">
                    I'm {" "}
                    <ReactTyped
                        strings={["Gowtham AK", "a React.js Developer"]}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        cursorChar=" |"
                        showCursor={true}
                    />
                </h1>
                <p>I'm a Web Developer with 3+ years of experience in building dynamic websites, portals, and graphic designs.</p>
            </div>
        </Container>
    );
}