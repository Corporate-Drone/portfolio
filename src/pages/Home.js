import React from 'react'
import Fade from 'react-reveal/Fade';
import './_Home.scss'
import Icon from '../components/Icon'

const Home = () => {
    return (
        <div className="Home" id="home">
            <Fade top>
                <h1>Hello, my name is Dustin and I am an aspiring web developer.</h1>
                <div className="Home-icons">
                    <Icon name={'fab fa-github fa-4x'} />
                    <Icon name={'far fa-envelope fa-4x'} />
                </div>
            </Fade>
        </div>
    )
}

export default Home
