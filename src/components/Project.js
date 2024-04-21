import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/UIElements/Button'

import './_Project.scss'

function Project(props) {
    const { sourceImg, title, description, technology, githubLink, liveLink } = props;
    const theme = useSelector(state => state.darkThemeEnabled)

    const techItems = technology.map(item => (
        <a href={item.website} target="_blank" rel="noreferrer">
            <div className="Project-detail-technology-item">{item.name}</div>
        </a>
    ))

    return (
        <div className={theme ? "Project dark-project" : "Project"}>
            <div className="Project-image">
                <div className="Project-image-overlay"></div>
                <img src={sourceImg} alt={title}></img>
            </div>
            <div className="Project-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="Project-detail-technology">
                    {techItems}
                </div>
                <div className="Project-detail-buttons">
                    <Button name={'fab fa-github fa-2x'} link={githubLink} />
                    {/* <Button name={'fas fa-external-link-alt fa-2x'} link={liveLink} /> */}
                </div>
            </div>

        </div>
    )
}

export default Project
