import React from 'react'
import { Fade } from "react-awesome-reveal";
import './_Home.scss'
import Icon from '../components/Icon'

const Home = () => {
    return (

        <div className="Home" id="home">
            <Fade direction="down" triggerOnce>
                <h1>Hello, my name is Dustin and I am a web developer.</h1>
            </Fade>
            <Fade direction="up" triggerOnce>
                <div className="Home-icons">
                    <a href='https://github.com/Corporate-Drone' target="_blank" rel="noreferrer"><Icon name={'fab fa-github fa-4x'} /></a>
                    <a href="mailto:contact@dsegg.dev">
                        <Icon name={'far fa-envelope fa-4x'} /></a>
                    <a href='https://docs.google.com/document/d/1avH_UvdoVNwNwMAFGotJaKEcNEsqEhrw' target="_blank" rel="noreferrer">
                        <Icon name={'far fa-file fa-4x'} about={true} tipName={'resumeTip'} tipText={'Resume'} />
                    </a>
                </div>
            </Fade>
            <Fade delay="50" triggerOnce>
                <i className="fas fa-chevron-down fa-3x Home-down"></i>
            </Fade>
        </div>

    )
}

export default Home
