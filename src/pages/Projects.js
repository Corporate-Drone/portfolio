import React from 'react'
import Fade from 'react-reveal/Fade';
import ProjectRow1 from '../components/ProjectRow1'
import ProjectRow2 from '../components/ProjectRow2'
import './_Projects.scss'

function Projects() {
    return (
        <div className="Projects" id="projects">
            <Fade>
                <ProjectRow1 />
                <ProjectRow2 />
            </Fade>
        </div>
    )
}

export default Projects
