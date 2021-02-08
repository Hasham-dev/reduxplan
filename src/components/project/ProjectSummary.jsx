import React from 'react';


const ProjectSummary = ({ project }) => {

    const { id, title, content } = project;

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    {title}
                </span>
                <p>Posted by the HV</p>
                <p className="grey-text">12th January, 2000</p>
            </div>
        </div>
    )
}

export default ProjectSummary;