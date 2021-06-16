import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/UIElements/Button'
import './_ProjectSmall.scss'

function ProjectSmall(props) {
    const { sourceImg, title, description, buttonLinkGithub, buttonLinkLive } = props;
    const theme = useSelector(state => state.darkThemeEnabled)

    return (
        <div className={theme ? "ProjectSmall dark-project-small" : "ProjectSmall"}>
            <div className="ProjectSmall-main">
                <div className="ProjectSmall-main-overlay"></div>
                <img src={sourceImg}></img>
                <div className="ProjectSmall-main-info">
                    <h3 className="ProjectSmall-main-info-text">{title}</h3>
                    <p className="ProjectSmall-main-info-text">{description}</p>
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
