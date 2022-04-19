import React from 'react';
import { Link } from 'react-scroll';

import './AboutMe.css'

// import '../Home/Profile/Profile.css'

export default function AboutMe(props) {

    const ABOUT_DATA = {
        description:
            "Front End (React JS) & Full Stack (MERN stack) web developer, I have great knowledge of JavaScript & can adapt & work with all frameworks (frontend & backend) based on JavaScript. Can code in Python too. I am a Computer Science and Engineering graduate from Acharya Institue of Technology Bengaluru India.",
        highlights: {
            bullets: [
                "Interactive FrontEnd as per the design",
                "Front End web development",
                "Full Stack web development",
                "React JS and other Frameworks",
                "React Redux, Router & Transitions",
                "Building REST API",
                "Managing database",
            ],
            heading: "Here are a Few Highlights :",
        },
    };

    const renderBulletPoints = () => {
        return ABOUT_DATA.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ))
    }

    return (
        <div className="about-me-container">
            <div className="about-me-parent">
                <h1>ABOUT ME</h1>

                <div className="about-me-card">

                    {/* <div className="about-me-profile"></div> */}

                    <div className="about-me-details">
                        <span className='about-me-description'>{ABOUT_DATA.description}</span>

                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{ABOUT_DATA.highlights.heading}</span>
                            </div>
                            {renderBulletPoints()}
                        </div>
                        <div className="about-me-button-options">
                            <Link activeClass='active' to="contact"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={3}
                                duration={500}
                                onClick={props.onClick}
                            >
                                <button className="btn contact-me-button">Contact Me</button>
                            </Link>
                            <a href="Mustaq.pdf" download="Mustaq's Resume">
                                <button className="btn resume-download-button">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
