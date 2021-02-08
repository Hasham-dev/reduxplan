import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectDetails(props) {
    let { id } = useParams();

    console.log(id);

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis fugiat nesciunt corporis officiis. Repudiandae temporibus obcaecati, fugiat voluptate exercitationem enim eius a corrupti. Alias voluptatibus voluptate corporis reiciendis velit?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By HV</div>
                    <div>8th Feb, 9PM</div>
                </div>
            </div>
        </div>

    )
}

export default ProjectDetails
