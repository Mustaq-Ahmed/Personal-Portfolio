import React from 'react';

import './ResumeHeading.css'

export default function ResumeHeading(props) {
    return (
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet"></div>
                <span>{props.heading ? props.heading : ""}</span>
            </div>
            <div className="resume-sub-heading">
                <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
                <span>{props.description ? props.description : ""}</span>
            </div>
            <div className="source-code">
                <span>{props.sourceCode ? props.sourceCode : ""}</span>
            </div>
            {/* <div className="live-website">
                <span>{props.websiteLink ? props.websiteLink : ""}</span>
            </div> */}
            <div className="live-website">
                <span>{props.websiteLink ? <a href='https://sneakersfreaks.herokuapp.com' target="_blank" rel='noreferrer'>sneakersfreaks.com</a> : ""}</span>
            </div>
        </div>
    );
};

