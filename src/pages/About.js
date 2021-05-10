import React from 'react'
import './_About.scss'
import Icon from '../components/Icon';

function About() {
    return (
        <div className="About">
            <h1>About Me</h1>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <div className="About-icons">
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-html5'} />
            </div>
        </div>
    )
}

export default About
