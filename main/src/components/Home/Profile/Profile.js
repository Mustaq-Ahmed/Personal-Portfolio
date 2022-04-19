import React from 'react';
import { Link } from 'react-scroll';

import './Profile.css'

export default function Profile(props) {
    return (
        <div className='profile-container'>
            <div className="profile-parent">

                <div className="profile-picture__content">
                    <div className="profile-picture__content-name">
                        Hello, I am <span className='name'>MD Mustaq Ahmed</span>
                    </div>
                    <div className="profile-picture__content-role">
                        <h1>A JavaScript Web Developer</h1>
                        <h1>Frontend/FullStack Developer</h1>
                        <span>
                            Always Fascinated by Web Tech and Like to build Website's
                        </span>
                    </div>
                    <div className="button-options">
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

                        <a href="Mustaq1.pdf" download="Mustaq's Resume">
                            <button className="btn resume-download-button">Get Resume</button>
                        </a>
                    </div>
                </div>

                <div className="profile-picture__image-container">
                    <div className="profile-picture__image">
                        {/* <img src={require("../../../assets/profile-picture.jpg")} alt="No Internet Connection" /> */}
                    </div>

                </div>

            </div>
        </div>
    )
}
