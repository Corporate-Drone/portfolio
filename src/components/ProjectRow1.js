import React from 'react'
import { Fade, Bounce } from "react-awesome-reveal";
import Project from './Project'
import './_ProjectRow1.scss'
import chirp from '../images/projects/chirp.png';
import devblog from '../images/projects/devblog.png';
import portfolio from '../images/projects/portfolio.PNG';

function ProjectRow1() {

    const Chirp = {
        title: 'Chirp',
        description: 'A social media MERN stack application inspired by Twitter. Users can upload a picture of themselves, like other chirps, and follow other users. Users can only see chirps made from the users they follow. ',
        github: 'https://github.com/Corporate-Drone/chirp-app',
        live: 'https://chirp-final.herokuapp.com/',
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
                name: 'JSON Web Tokens',
                website: 'https://jwt.io/'
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
                name: 'Redux',
                website: 'https://redux.js.org/'
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
                    <Project sourceImg={portfolio} title={Portfolio.title} description={Portfolio.description} technology={Portfolio.technology} githubLink={Portfolio.github} liveLink={Portfolio.live} />
                </div>
            </Bounce>
        </div >

    )
}

export default ProjectRow1
