import React from 'react';

import ResumeHeading from '../ReUseableComponent/ResumeHeading'
import './Education.css'

export default function Education() {

    const educationDetails = [
        {
            heading: "Bachelor of Engineering in Computer Science & Engineering",
            subHeading: "Acharya Institute of Technology, Bengaluru Karnataka India",
        },
        {
            heading: "Class XII, PCMC (Physics, Chemistry, Maths, Computers)",
            subHeading: "Nalanda PU College, Gulbarga Karnataka India",
        },
        {
            heading: "Class X, Karnataka State Board",
            subHeading: "Holy Faith English medium school, Humnabad Karnataka India",
        },
    ]

    return (
        <div className="resume-screen-container">
            {educationDetails.map((eduDetail, index) => (
                <ResumeHeading
                    key={index}
                    heading={eduDetail.heading}
                    subHeading={eduDetail.subHeading}
                />
            ))}
        </div>
    )
}
