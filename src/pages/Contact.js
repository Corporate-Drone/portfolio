import React from 'react'
import { Fade } from "react-awesome-reveal";
import './_Contact.scss'

function Contact() {
    return (
        <div className="Contact" id="contact">
            <Fade delay="10">
                <h1>Get In Touch</h1>
                <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
                <a href="mailto:webmaster@example.com">Jon Doe</a>
                <h2>I also do game development in my free time.</h2>
                <div>game dev image gallery here</div>
            </Fade>
        </div>
    )
}

export default Contact
