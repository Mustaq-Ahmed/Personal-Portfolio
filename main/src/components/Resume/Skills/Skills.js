import React from "react"

import './Skills.css'

export default function Skills() {
    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 90 },
        { skill: "React JS", ratingPercentage: 90 },
        { skill: "Node JS", ratingPercentage: 80 },
        { skill: "Express JS", ratingPercentage: 75 },
        { skill: "Mongo Db", ratingPercentage: 75 },
        { skill: "SQL", ratingPercentage: 60 },
        { skill: "HTML", ratingPercentage: 90 },
        { skill: "CSS", ratingPercentage: 85 },
        { skill: "Python", ratingPercentage: 60 },
    ];

    return (
        <div className="resume-screen-container">
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}