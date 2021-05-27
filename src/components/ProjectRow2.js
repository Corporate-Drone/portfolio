import React from 'react'
import { Bounce } from "react-awesome-reveal";
import ProjectSmall from './ProjectSmall'
import './_ProjectRow2.scss'
import card from '../images/projects/card.png';
import iptracker from '../images/projects/iptracker.jpg';
import jokes from '../images/projects/jokes.png';
import todo from '../images/projects/todo.jpg';
import urlshortening from '../images/projects/urlshortening.jpg';
import weather from '../images/projects/weather.png';

function ProjectRow2() {
    return (
        <div className="ProjectRow2">
            <Bounce direction="left" triggerOnce >
                <div className="ProjectRow2-group">
                    <ProjectSmall sourceImg={todo} buttonLinkGithub={'https://github.com/Corporate-Drone/todo-list'} title={'Todo List'} description={'A todo list made with HTML, Sass, and Javascript.'} />
                    <ProjectSmall sourceImg={iptracker} buttonLinkGithub={'https://github.com/Corporate-Drone/ip-tracker'} title={'IP Tracker'} description={'Get the location of an IP address. Made with Ipify and leaflet API'} />
                    <ProjectSmall sourceImg={urlshortening} buttonLinkGithub={'https://github.com/Corporate-Drone/url-shortening'} title={'Url Shortening'} description={'Shorten those long URL links. Made with Shrtco API.'} />
                </div>
            </Bounce>
            <Bounce direction="right" triggerOnce >
                <div className="ProjectRow2-group">
                    <ProjectSmall sourceImg={weather} title={'Weather Card'} buttonLinkGithub={'https://github.com/Corporate-Drone/weather-card'} description={'A weather card made with Open Weather Map API. Project is part of The Odin Project curriculum.'} />
                    <ProjectSmall sourceImg={jokes} title={'Dad Jokes'} buttonLinkGithub={'https://github.com/Corporate-Drone/dad-jokes'} description={'View and vote on jokes from the ICanHazDadJoke API. Design from Colt Steele and made with React.'} />
                    <ProjectSmall sourceImg={card} title={'Deck of Cards'} buttonLinkGithub={'https://github.com/Corporate-Drone/deck-of-cards'} description={'A React app that displays a deck of cards, one card at a time.'} />
                </div>
            </Bounce>
        </div>
    )
}

export default ProjectRow2
