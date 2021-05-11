import React from 'react'
import './_Icon.scss'

function Icon(props) {
    const { name } = props;

    return (
        <i className={name}></i>
    )
}

export default Icon
