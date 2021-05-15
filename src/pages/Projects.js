import React from 'react'
import { Fade, Bounce } from "react-awesome-reveal";
import ProjectRow1 from '../components/ProjectRow1'
import ProjectRow2 from '../components/ProjectRow2'
import './_Projects.scss'

function Projects() {
    return (
        <div className="Projects" id="projects">
            <ProjectRow1 />
            <ProjectRow2 />
        </div>
    )
}

export default Projects
