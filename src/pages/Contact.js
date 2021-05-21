import React from 'react'
import { Fade } from "react-awesome-reveal";
import Game from '../components/Game';
import './_Contact.scss'

function Contact() {
    return (
        <div className="Contact" id="contact">
            <Fade delay="10" triggerOnce>
                <h1>Get In Touch</h1>
                <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
                <a href="mailto:webmaster@example.com">Jon Doe</a>
                <h3>I also do game development in my free time.</h3>
                <div className="Contact-games">
                    <Game title={'Squat Rack Defender'}/>
                    <Game title={'Plastic Onslaught'}/>
                </div>
            </Fade>
        </div>
    )
}

export default Contact
