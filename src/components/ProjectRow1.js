import React from 'react'
import { Fade, Bounce } from "react-awesome-reveal";
import Project from './Project'
import './_ProjectRow1.scss'

function ProjectRow1() {

    const Chirp = {
        sourceImg: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
        title: 'Chirp',
        description: 'A social media MERN stack application inspired by Twitter. Users can upload a picture of themselves, like other chirps, and follow other users. ',
        technology: ['MongoDB', 'Express', 'React', 'Node.js', 'Passport', 'MaterialUI', 'Cloudinary']
    }

    const Devblog = {
        sourceImg: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
        title: 'Devblog',
        description: 'A CRUD blog application where users can share what they have been developing. Users can post blog posts with images or animated gifs and like and comment on other blog posts. ',
        technology: ['MongoDB', 'Express', 'EJS', 'Node.js', 'Passport', 'Cloudinary', 'Bootstrap', 'TinyMCE']
    }

    return (

        <div className="ProjectRow1">
            <Bounce triggerOnce fraction="0.7">
                <h1>Projects</h1>
            </Bounce>
            <Bounce triggerOnce fraction="0.3">
                <div className="ProjectRow1-projects">
                    <Project sourceImg={Chirp.sourceImg} title={Chirp.title} description={Chirp.description} technology={Chirp.technology} />
                    <Project sourceImg={Devblog.sourceImg} title={Devblog.title} description={Devblog.description} technology={Devblog.technology} />
                </div>
            </Bounce>
        </div >

    )
}

export default ProjectRow1
