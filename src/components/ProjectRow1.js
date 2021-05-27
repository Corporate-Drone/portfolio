import React from 'react'
import { Fade, Bounce } from "react-awesome-reveal";
import Project from './Project'
import './_ProjectRow1.scss'
import chirp from '../images/projects/chirp.png';
import devblog from '../images/projects/devblog.png';

function ProjectRow1() {

    const Chirp = {
        // sourceImg: {chirp},
        title: 'Chirp',
        description: 'A social media MERN stack application inspired by Twitter. Users can upload a picture of themselves, like other chirps, and follow other users. Users can only see chirps made from the users they follow. ',
        github: 'https://github.com/Corporate-Drone/chirp-app-heroku',
        live: 'https://aqueous-scrubland-05097.herokuapp.com/',
        technology: [
            {
                name: 'MongoDB',
                website: 'https://www.mongodb.com/'
            },
            {
                name: 'Express',
                website: 'https://expressjs.com/'
            },
            {
                name: 'React',
                website: 'https://reactjs.org/'
            },
            {
                name: 'Node.js',
                website: 'https://nodejs.org/'
            },
            {
                name: 'Passport JS',
                website: 'http://www.passportjs.org/'
            },
            {
                name: 'MaterialUI',
                website: 'https://material-ui.com/'
            },
            {
                name: 'Cloudinary',
                website: 'https://cloudinary.com/'
            }

        ]
    }

    const Devblog = {
        // sourceImg: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
        title: 'Devblog',
        description: 'A CRUD blog application where users can share what they have been developing. Users can post blog posts with images or animated gifs and like and comment on other blog posts. ',
        github: 'https://github.com/Corporate-Drone/devblog',
        live: 'https://guarded-wave-10431.herokuapp.com/',
        technology: [
            {
                name: 'MongoDB',
                website: 'https://www.mongodb.com/'
            },
            {
                name: 'Express',
                website: 'https://expressjs.com/'
            },
            {
                name: 'EJS',
                website: 'https://ejs.co/'
            },
            {
                name: 'Node.js',
                website: 'https://nodejs.org/'
            },
            {
                name: 'Passport JS',
                website: 'http://www.passportjs.org/'
            },
            {
                name: 'Cloudinary',
                website: 'https://cloudinary.com/'
            },
            {
                name: 'Bootstrap',
                website: 'https://getbootstrap.com/'
            },
            {
                name: 'TinyMCE',
                website: 'https://www.tiny.cloud/'
            }
        ]
    }

    const Portfolio = {
        sourceImg: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
        title: 'Portfolio',
        description: 'My personal website designed with Figma and built with React to showcase what I have been working on. ',
        github: 'https://github.com/Corporate-Drone',
        live: 'https://github.com/Corporate-Drone',
        technology: [
            {
                name: 'React',
                website: 'https://reactjs.org/'
            },
            {
                name: 'Sass',
                website: 'https://sass-lang.com/'
            }
        ]
    }

    return (

        <div className="ProjectRow1">
            <Bounce triggerOnce fraction="0.7">
                <h1>Projects</h1>
            </Bounce>
            <Bounce triggerOnce fraction="0.3">
                <div className="ProjectRow1-projects">
                    <Project sourceImg={chirp} title={Chirp.title} description={Chirp.description} technology={Chirp.technology} githubLink={Chirp.github} liveLink={Chirp.live} />
                    <Project sourceImg={devblog} title={Devblog.title} description={Devblog.description} technology={Devblog.technology} githubLink={Devblog.github} liveLink={Devblog.live} />
                    <Project sourceImg={Portfolio.sourceImg} title={Portfolio.title} description={Portfolio.description} technology={Portfolio.technology} githubLink={Portfolio.github} liveLink={Portfolio.live} />
                </div>
            </Bounce>
        </div >

    )
}

export default ProjectRow1
