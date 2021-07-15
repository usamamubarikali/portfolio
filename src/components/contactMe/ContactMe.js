import React from 'react';
import './ContactMe.scss';
import ContactMeForm from './ContactMeForm';

const ContactMe = ({ toggleContactMe, setToggleContactMe }) => {
    return (
        <div className={toggleContactMe ? "contactme__maindiv" :"display-none"}>
            <div
                className={toggleContactMe ? "backdrop backdrop-open" : "backdrop backdrop-close"}
                onClick={() => setToggleContactMe(false)}
            >
            </div>
            <ContactMeForm toggleContactMe={toggleContactMe} />
        </div>
    )
}

export default ContactMe;
