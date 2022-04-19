import React from 'react';

import ResumeHeading from '../ReUseableComponent/ResumeHeading';
import './Projects.css'

export default function Projects() {

    const projectsDetails = [
        {
            title: "Sneaker Freaks (E-Commerce Website) ",
            description:
                "Online ecommerce website for showcasing and selling Shoes online with essential feature's like Authentication, Authourization and payment integration using Braintree payment system",
            subHeading:
                "Tech Used: Mongo DB, Epress Js, React Js, Node JS, Bootstrap.",
            // sourceCode: "Source Code : Not Available Now",
            websiteLink: "Website Link : "
        },
        {
            title: "Personal Portfolio Website",
            description:
                "A Single Page Responsive Web Application Portofolio Website to showcase my frontend and designing skills.",
            subHeading: "Tech Used: React JS, HTML, CSS, Nodemailer, React sroll, React Router",
            // sourceCode: "Source Code : Not Available Now",
            // websiteLink: "Website Link : www.myPortfolioWebsite.com",
        },
        {
            title: "Fake News Detector (College Major Project)",
            description:
                "Web based application to detect fake news corresponding to the correct news and predict available correct news using Machine Learning",
            subHeading:
                "Tech Used:  HTML, CSS, Javascript, SQL, Numphy, Panda and Python.",
        },
    ];

    return (
        <div>
            <div className="resume-screen-container">
                {projectsDetails.map((projectsDetails, index) => (
                    <ResumeHeading
                        key={index}
                        heading={projectsDetails.title}
                        subHeading={projectsDetails.subHeading}
                        description={projectsDetails.description}
                        sourceCode={projectsDetails.sourceCode}
                        websiteLink={projectsDetails.websiteLink}
                    />
                ))}
            </div>
        </div>
    )
}
