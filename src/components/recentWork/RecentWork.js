import React from 'react';
import './RecentWork.scss';
import Examples from './workExamples/Examples';

const RecentWork = () => {
    return (
        <div className="recentwork__maindiv">
            <div className="recentwork__innerdiv">
                <div className="recentwork__description">
                    <h3>My Recent Work</h3>
                    <p>
                        Isn't it amazing when an idea comes to life? Here are some recent projects
                        I've worked on that I'm proud of! These projects have helped me polish
                        my skills in different tech stacks including Python, AWS, Automation
                        and Full Stack Development.My soft skills have also enhanced which
                        include communication, presentation and documentation.
                        I look forward to adding new and cooler projects to my portfolio with your
                        help! Want to see more? <a>Contact me.</a>
                    </p>
                </div>
            </div>
            <Examples />
        </div>
    )
}

export default RecentWork;