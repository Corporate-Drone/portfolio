import React from 'react'
import ReactTooltip from "react-tooltip";
import './_Icon.scss'

function Icon(props) {
    const { name, tipName, tipText, about } = props;

    return (
        <>
            <i className={name} data-tip data-for={tipName}></i>
            {about && <ReactTooltip id={tipName} place="top" effect="solid">
                {tipText}
            </ReactTooltip>}
        </>
    )
}

export default Icon
