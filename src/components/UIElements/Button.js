import React from 'react'
import './_Button.scss'

function Button(props) {
    const { name, display, link } = props;
    return (
        <a className="Button" href={link} target="_blank">
            <i className={name}></i>
        </a>
    )
}

export default Button
