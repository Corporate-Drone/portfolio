import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/UIElements/Button'

import './_Project.scss'

function Project(props) {
    const { sourceImg, title, description, technology } = props;

    const techItems = technology.map(item => (
        <a href={item.website} target="_blank">
            <div className="Project-detail-technology-item">{item.name}</div>
        </a>
    ))

    return (
        <div className="Project">
            <div className="Project-image">
                <img src={sourceImg}></img>
            </div>
            <div className="Project-detail">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="Project-detail-technology">
                    {techItems}
                </div>
                <div className="Project-detail-buttons">
                    <Button name={'fab fa-github fa-2x'} link={'https://github.com/Corporate-Drone'} />
                    <Button name={'fas fa-external-link-alt fa-2x'} link={'https://github.com/Corporate-Drone'} />
                </div>
            </div>

        </div>
    )
}

export default Project
