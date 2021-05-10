import React from 'react'
import './_ProjectSmall.scss'

function ProjectSmall(props) {
    const { sourceImg, title, description } = props;
    return (
        <div className="ProjectSmall">
            <div className="ProjectSmall-main">
                <img src={sourceImg}></img>
            </div>
            <div className="ProjectSmall-view">
                <p>{title}</p>
                <div className="ProjectSmall-buttons">
                    <button>Github</button>
                    <button>Live</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectSmall
