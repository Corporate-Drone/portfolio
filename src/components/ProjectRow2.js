import React from 'react'
import { Bounce } from "react-awesome-reveal";
import ProjectSmall from './ProjectSmall'
import './_ProjectRow2.scss'

function ProjectRow2() {
    return (
        <div className="ProjectRow2">
            <Bounce direction="left" triggerOnce >
                <div className="ProjectRow2-group">
                    <ProjectSmall sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Test App'} />
                    <ProjectSmall sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Test App'} />
                    <ProjectSmall sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Test App'} />
                </div>
            </Bounce>
            <Bounce direction="right" triggerOnce >
                <div className="ProjectRow2-group">
                    <ProjectSmall sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Test App'} />
                    <ProjectSmall sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Test App'} />
                    <ProjectSmall sourceImg={'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'} title={'Test App'} />
                </div>
            </Bounce>
        </div>
    )
}

export default ProjectRow2
