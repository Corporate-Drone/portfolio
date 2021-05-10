import React from 'react'
import './_Project.scss'

function Project(props) {
    const { sourceImg, title, description } = props;
    return (
        <div className="Project">
            <img src={sourceImg}></img>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Project
