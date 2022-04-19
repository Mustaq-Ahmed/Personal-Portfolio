import React, { useState } from 'react';
import Education from './Education/Education';
import Interests from './Interests/Interests';
import Projects from './Projects/Projects';

import './Resume.css'
import Skills from './Skills/Skills';

export default function Resume(props) {

    const [showComponent, setShowComponent] = useState("Projects")

    return (
        <div className='resume-container'>
            <div className="resume-content">
                <h1>RESUME</h1>
            </div>
            <div className="resume-navbar">
                <button onClick={() => setShowComponent("Projects")}>Projects</button>
                <button onClick={() => setShowComponent("Skills")}>Skills</button>
                <button onClick={() => setShowComponent("Education")}>Education</button>
                <button onClick={() => setShowComponent("Interests")}>Interests</button>
            </div>
            <div className="resume-card">
                <div className="all-components">
                    <h1>{showComponent}</h1>
                    {showComponent === "Projects" && <Projects />}
                    {showComponent === "Skills" && <Skills />}
                    {showComponent === "Education" && <Education />}
                    {showComponent === "Interests" && <Interests />}
                </div>
            </div>
        </div>
    )
}
