import React from 'react'
import Fade from 'react-reveal/Fade';
import './_About.scss'
import Icon from '../components/Icon';

function About() {
    return (
        <div className="About" id="about">
            <Fade>
                <h1>About Me</h1>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. I also use Express and MongoDB in addition to the technologies below.
            </p>
                <div className="About-icons">
                    <div className="About-icons-group-1">
                        <Icon name={'fab fa-html5 fa-4x'} />
                        <Icon name={'fab fa-css3-alt fa-4x'} />
                        <Icon name={'fab fa-js-square fa-4x'} />
                        <Icon name={'fab fa-sass fa-4x'} />
                    </div>
                    <div className="About-icons-group-2">
                        <Icon name={'fab fa-bootstrap fa-4x'} />
                        <Icon name={'fab fa-react fa-4x'} />
                        <Icon name={'fab fa-git-alt fa-4x'} />
                        <Icon name={'fab fa-github fa-4x'} />
                    </div>
                    <div className="About-icons-group-3">
                        <Icon name={'fab fa-figma fa-4x'} />
                        <Icon name={'fab fa-node fa-4x'} />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default About
