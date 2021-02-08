import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions'
function CreateProject(props) {

    const [state, setState] = useState({
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        setState((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state);
        props.createProject(state);
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create New Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create Project
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

const mapDisptachToProps = (dispatch) => {
    return {

        createProject: (project) => dispatch(createProject(project))
    }

}

export default connect(null, mapDisptachToProps)(CreateProject);
