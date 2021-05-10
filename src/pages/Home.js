import React from 'react'
import './_Home.scss'
import Icon from '../components/Icon'

const Home = () => {
    return (
        <div className="Home">
            <h1>Hello, my name is Dustin and I am an inspiring web developer.</h1>
            <div className="Home-icons">
                <Icon name={'fab fa-html5'} />
                <Icon name={'fab fa-css3-alt'} />
                <Icon name={'fab fa-js-square'} />
            </div>
        </div>
    )
}

export default Home
