import React from 'react'
import Project from './Project'
import './_ProjectRow1.scss'

function ProjectRow1() {
    return (
        <div className="ProjectRow1">
            <Project sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Chirp'} description={'A 7 day weather application that sets weather data based on user input.'} />
            <Project sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Devblog'}description={'A 7 day weather application that sets weather data based on user input.'} />
        </div>
    )
}

export default ProjectRow1
