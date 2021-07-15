import React from 'react';
import sent from '../../static/images/sent.png';
import './ContactMe.scss';

const EmailSent = () => {
    return (
        <div className="msg-sent">
            <h2>Success</h2>
            <img className="logo" alt="Usama Ali Portfolio" src={sent} />
            <p>Thanks for your message we will be in touch soon</p>
        </div>
    )
}

export default EmailSent;
