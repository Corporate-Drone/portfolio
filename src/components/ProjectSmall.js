import React from 'react'
import Button from '../components/UIElements/Button'
import './_ProjectSmall.scss'

function ProjectSmall(props) {
    const { sourceImg, title, description, buttonLink } = props;
    return (
        <div className="ProjectSmall">
            <div className="ProjectSmall-main">
                <img src={sourceImg}></img>
                <div className="ProjectSmall-main-info">
                    A campgrounds information-sharing website made with Node.js, Express and MongoDB.
                </div>
            </div>
            <div className="ProjectSmall-view">
                <p>{title}</p>
                <div className="ProjectSmall-buttons">
                    <Button name={'fab fa-github fa-2x'} link={buttonLink} />
                    <Button name={'fas fa-external-link-alt fa-2x'} link={buttonLink} />
                </div>
            </div>
        </div>
    )
}

export default ProjectSmall
