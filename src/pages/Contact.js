import React from 'react'
import { Fade } from "react-awesome-reveal";
import Game from '../components/Game';
import './_Contact.scss'
import bannerarcade from '../images/games/bannerarcade.png'
import srd from '../images/games/srd.gif'
import Icon from '../components/Icon'

function Contact() {
    return (
        <div className="Contact" id="contact">
            <Fade delay="10" triggerOnce>
                <h1>Get In Touch</h1>
                <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
                <a href="mailto:contact@dmarcus.dev">contact@dmarcus.dev</a>
                <Fade delay="50" triggerOnce>
                    <h3>I also do game development in my free time.</h3>
                </Fade>
                <div className="Contact-games">
                    <Game image={bannerarcade} gif={srd} title={'Squat Rack Defender'} />    
                </div>
                <div>
                    <h4>Follow me on Twitter to see more!</h4>
                    <a href='https://twitter.com/afeathereddino' target="_blank" rel="noreferrer"><Icon name={'fab fa-twitter fa-4x'}/></a>
                </div>
            </Fade>
        </div>
    )
}

export default Contact
