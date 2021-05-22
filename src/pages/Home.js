import React from 'react'
import { Fade } from "react-awesome-reveal";
import './_Home.scss'
import Icon from '../components/Icon'

const Home = () => {
    return (

        <div className="Home" id="home">
            <Fade direction="down" triggerOnce>
                <h1>Hello, my name is Dustin and I am an aspiring web developer.</h1>
            </Fade>
            <Fade direction="up" triggerOnce>
                <div className="Home-icons">
                    <a href='https://github.com/Corporate-Drone' target="_blank"><Icon name={'fab fa-github fa-4x'} /></a>
                    <Icon name={'far fa-envelope fa-4x'} />
                    <Icon name={'far fa-file fa-4x'} about={true} tipName={'resumeTip'} tipText={'Resume'} />
                </div>
            </Fade>
            <Fade delay="50" triggerOnce>
                <i className="fas fa-chevron-down fa-3x Home-down"></i>
            </Fade>
        </div>

    )
}

export default Home
