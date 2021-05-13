import React from 'react'
import { Link} from 'react-router-dom';

import './_Project.scss'

function Project(props) {
    const { sourceImg, title, description, technology } = props;

    const techItems = technology.map(item => (
        <div className="Project-technology-item">{item}</div>
    ))

    return (
        <div className="Project">
            <img src={sourceImg}></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="Project-technology">
                {techItems}
            </div>
            <div className="Project-buttons">
                <button>Github</button>
                <button>Live</button>
            </div>
        </div>
    )
}

export default Project
