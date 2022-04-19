import React from 'react';

import { Link } from 'react-scroll'

import './NavLinks.css'

export default function NavLinks(props) {

    return (
        <ul className='navlinks'>
            <li>
                <Link activeClass='active' to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    // offset={80}
                    duration={500}
                    onClick={props.onClick}
                > Home </Link>
            </li>
            <li>
                <Link activeClass='active' to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    // offset={10}
                    duration={500}
                    onClick={props.onClick}
                > About </Link>
            </li>
            <li>
                <Link activeClass='active' to="resume"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={1.3}
                    duration={500}
                    onClick={props.onClick}
                > Resume </Link>
            </li>
            <li>
                <Link activeClass='active' to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={2}
                    hashSpy={true}
                    onClick={props.onClick}
                > Contact </Link>
            </li>
            {/* <li>
                <a href="/"> Resources </a>
            </li> */}
            <li>
                <a href="https://www.linkedin.com/in/md-mustaq-ahmed-773a61232/" target="_blank" rel="noreferrer"> LinkedIn </a>
            </li>
            <li>
                <a href="https://github.com/Mustaq-Ahmed" target="_blank" rel="noreferrer"> GitHub </a>
            </li>
        </ul>
    )
}
