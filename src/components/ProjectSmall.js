import React from 'react'
import Button from '../components/UIElements/Button'
import './_ProjectSmall.scss'

function ProjectSmall(props) {
    const { sourceImg, title, description, buttonLinkGithub, buttonLinkLive } = props;
    return (
        <div className="ProjectSmall">
            <div className="ProjectSmall-main">
                <img src={sourceImg}></img>
                <div className="ProjectSmall-main-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="ProjectSmall-view">
                <div className="ProjectSmall-buttons">
                    <Button name={'fab fa-github fa-2x'} link={buttonLinkGithub} />
                    <Button name={'fas fa-external-link-alt fa-2x'} link={buttonLinkLive} />
                </div>
            </div>
        </div>
    )
}

export default ProjectSmall
