import React from 'react';
import './RecentWork.scss';
import Examples from './workExamples/Examples';

const RecentWork = () => {
    return (
        <div className="recentwork__maindiv">
            <div className="recentwork__description">
                <h3>My Recent Work</h3>
                <p>Here are a few projects descriptions I've worked on recently. Want to see more? <a>Contact me.</a></p>
            </div>
            <Examples />
        </div>
    )
}

export default RecentWork;