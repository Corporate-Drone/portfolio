import React from 'react'
import { Bounce } from "react-awesome-reveal";
import ProjectSmall from './ProjectSmall'
import './_ProjectRow2.scss'
import iptracker from '../images/projects/iptracker.jpg';
import jokes from '../images/projects/jokes.png';
import todo from '../images/projects/todo.jpg';
import urlshortening from '../images/projects/urlshortening.jpg';
import weather from '../images/projects/weather.png';
import portfolio from '../images/projects/portfolio-small.PNG';

function ProjectRow2() {
    return (
        <div className="ProjectRow2">
            <Bounce direction="left" triggerOnce >
                <div className="ProjectRow2-group">
                    <ProjectSmall sourceImg={portfolio} buttonLinkGithub={'https://github.com/Corporate-Drone/portfolio'} buttonLinkLive={'https://www.dsegg.dev'} title={'Portfolio'} description={'My personal website built with React to showcase what I have been working on.'} />
                    <ProjectSmall sourceImg={todo} buttonLinkGithub={'https://github.com/Corporate-Drone/todo-list'} buttonLinkLive={'https://condescending-aryabhata-405e6b.netlify.app/'} title={'Todo List'} description={'A todo list made with HTML, Sass, and Javascript.'} />
                    <ProjectSmall sourceImg={iptracker} buttonLinkGithub={'https://github.com/Corporate-Drone/ip-tracker'} buttonLinkLive={'https://confident-bose-c3335a.netlify.app/'} title={'IP Tracker'} description={'Get the location of an IP address. Made with Ipify and leaflet API'} />
                </div>
            </Bounce>
            <Bounce direction="right" triggerOnce >
                <div className="ProjectRow2-group">
                <ProjectSmall sourceImg={urlshortening} buttonLinkGithub={'https://github.com/Corporate-Drone/url-shortening'} buttonLinkLive={'https://competent-lamarr-6898dd.netlify.app/'} title={'Url Shortening'} description={'Shorten those long URL links. Made with Shrtco API.'} />
                    <ProjectSmall sourceImg={weather} title={'Weather Card'} buttonLinkGithub={'https://github.com/Corporate-Drone/weather-card'} buttonLinkLive={'https://mystifying-agnesi-53430e.netlify.app/'} description={'A weather card made with Open Weather Map API.'} />
                    <ProjectSmall sourceImg={jokes} title={'Dad Jokes'} buttonLinkGithub={'https://github.com/Corporate-Drone/dad-jokes'} buttonLinkLive={'https://serene-hoover-3c518a.netlify.app/'} description={'View and vote on jokes from the ICanHazDadJoke API.'} />
                </div>
            </Bounce>
        </div>
    )
}

export default ProjectRow2
