import React from 'react'
import { Fade } from "react-awesome-reveal";
import './_Game.scss'

function Game(props) {
    const { title, image, gif } = props;

    return (
        <Fade delay="50" triggerOnce>
            <div className="Game">
                {/* <h4>{title}</h4> */}
                <a href='https://afeathereddinosaur.itch.io/squatrackdefender' target="_blank">
                    <img src={image} alt={title} class="static"></img>
                    <img src={gif} alt={title} class="active"></img>
                    {/* <img class="static" src="https://lh4.googleusercontent.com/-gZiu96oTuu4/Uag5oWLQHfI/AAAAAAAABSE/pl1W8n91hH0/w140-h165-no/Homer-Static.png" />
                    <img class="active" src="https://lh4.googleusercontent.com/i1RprwcvxhbN2TAMunNxS4RiNVT0DvlD9FNQCvPFuJ0=w140-h165-no" /> */}
                </a>
            </div>
        </Fade>
    )
}

export default Game
