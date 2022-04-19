import React from 'react';

import ResumeHeading from '../ReUseableComponent/ResumeHeading';
import './Interests.css'

export default function Interests() {

    const interestDetails = [
        {
            heading: "Playing Cricket",
        },
        {
            heading: "Watching Technical Vlogs",
        },
        {
            heading: "Street Style Fashion",
        },
        {
            heading: "Knowing about New Technologies",
        },
        {
            heading: "Music from Ghazals - Hip-Hop",
        },
    ]

    return (
        <div className="resume-screen-container">
            {interestDetails.map((interestDetail, index) => (
                <ResumeHeading
                    key={index}
                    heading={interestDetail.heading}
                />
            ))}
        </div>
    )
}
