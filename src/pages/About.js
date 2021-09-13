import React from 'react'
import { Fade, Bounce } from "react-awesome-reveal";
import './_About.scss'
import Icon from '../components/Icon';

function About() {
    return (
        <div className="About" id="about">
            <Fade triggerOnce>
                <h1>About Me</h1>
                <p>
                I have a bachelors degree in Accounting from Sacramento State and I am currently pursuing a second bachelors in Software Development from Western Governor's University. Through my studies, I have gained an understanding of computer science concepts and learned to apply this knowledge to efficiently use a variety of web technologies. I primarily use the MERN stack in addition to the technologies below to bring ideas to life for desktop and mobile devices.
                </p>
            </Fade>

            <div className="About-icons">
                <Bounce direction="left" triggerOnce>
                    <div className="About-icons-group-1">
                        <Icon name={'fab fa-html5 fa-4x'} tipName={'htmlTip'} tipText={'HTML'} about={true} />
                        <Icon name={'fab fa-css3-alt fa-4x'} tipName={'cssTip'} tipText={'CSS'} about={true} />
                        <Icon name={'fab fa-js-square fa-4x'} tipName={'jsTip'} tipText={'Javascript'} about={true} />
                        <Icon name={'fab fa-sass fa-4x'} tipName={'sassTip'} tipText={'Sass'} about={true} />
                    </div>
                </Bounce>
                <Bounce direction="right" triggerOnce>
                    <div className="About-icons-group-2">
                        <Icon name={'fab fa-bootstrap fa-4x'} tipName={'bootstrapTip'} tipText={'Bootstrap'} about={true} />
                        <Icon name={'fab fa-react fa-4x'} tipName={'reactTip'} tipText={'React'} about={true} />
                        <Icon name={'fab fa-git-alt fa-4x'} tipName={'gitTip'} tipText={'Git'} about={true} />
                        <Icon name={'fab fa-github fa-4x'} tipName={'githubTip'} tipText={'Github'} about={true} />
                    </div>
                </Bounce>
                <Bounce direction="up" triggerOnce>
                    <div className="About-icons-group-3">
                        <Icon name={'fab fa-figma fa-4x'} tipName={'figmaTip'} tipText={'Figma'} about={true} />
                        <Icon name={'fab fa-node fa-4x'} tipName={'nodeTip'} tipText={'Node.js'} about={true} />
                    </div>
                </Bounce>
            </div>
        </div>
    )
}

export default About
