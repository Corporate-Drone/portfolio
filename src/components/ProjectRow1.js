import React from 'react'
import Project from './Project'
import './_ProjectRow1.scss'

function ProjectRow1() {

    const Chirp = {
        sourceImg: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
        title: 'Chirp',
        description: 'A 7 day weather application that sets weather data based on user input.',
        technology: ['MongoDB', 'Express', 'React', 'Node.js', 'Passport', 'Cloudinary']
    }

    const Devblog = {
        sourceImg: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
        title: 'Devblog',
        description: 'A 7 day weather application that sets weather data based on user input.',
        technology: ['MongoDB', 'Express', 'EJS', 'Node.js', 'Passport', 'Cloudinary', 'Bootstrap', 'TinyMCE']
    }

    return (
        <div className="ProjectRow1">
            <h1>Projects</h1>
            <div className="ProjectRow1-projects">
                <Project sourceImg={Chirp.sourceImg} title={Chirp.title} description={Chirp.description} technology={Chirp.technology} />
                <Project sourceImg={Devblog.sourceImg} title={Devblog.title} description={Devblog.description} technology={Devblog.technology} />
            </div>

        </div>
    )
}

export default ProjectRow1
