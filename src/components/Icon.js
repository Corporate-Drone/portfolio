import React from 'react'

function Icon(props) {
    const { name } = props;

    return (
        <i className={name}></i>
    )
}

export default Icon
