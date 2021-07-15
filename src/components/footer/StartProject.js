import React from 'react';

const StartProject = ({ setToggleContactMe }) => {
    return (
        <div className='start-project__maindiv'>
            <h3>Start&nbsp;a&nbsp;project</h3>
            <p>Interested in working together? Let's e-meet & and have coffee.</p>
            <span className="footer__letconnect" onClick={() => setToggleContactMe(true)}>Lets&nbsp;Connect</span>
        </div>
    )
}

export default StartProject;
