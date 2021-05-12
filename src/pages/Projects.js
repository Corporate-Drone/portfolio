import React from 'react'
import ProjectRow1 from '../components/ProjectRow1'
import ProjectRow2 from '../components/ProjectRow2'
import './_Projects.scss'

function Projects() {
    return (
        <div className="Projects" id="projects">
            <h1>Projects</h1>
            <ProjectRow1 />
            <ProjectRow2 />
        </div>
    )
}

export default Projects
