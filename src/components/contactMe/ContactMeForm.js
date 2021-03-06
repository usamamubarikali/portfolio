import React, { useState } from 'react';
import signature from '../../static/images/signature.png';
import Avatar from 'avataaars';
import emailjs from 'emailjs-com';
import EmailSent from './EmailSent';

const ContactMeForm = ({ toggleContactMe }) => {
    const [emailSent, setEmailSent] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_qdgaclkdsjhflkjsfx', 'template_an2mdsanflkjshjjb3q', e.target, 'user_PbWZksajdlfdsalkfjdsafQkG1MB7XmkCcKleRg')
            .then((result) => {
                setEmailSent(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div
            className={toggleContactMe ? "contactme__form open" : "contactme__form close"}
        >
            <div className="signatures">
                <img className="logo" alt="Usama Ali Portfolio" src={signature} />
                <Avatar
                    avatarStyle='Transparent'
                    topType='ShortHairShortCurly'
                    accessoriesType='Blank'
                    hairColor='Black'
                    facialHairType='Blank'
                    clotheType='Hoodie'
                    clotheColor='Heather'
                    eyeType={emailSent ? "Hearts" : 'Happy'}
                    eyebrowType='Default'
                    mouthType='Smile'
                    skinColor='Tanned'
                    style={{ width: "7rem", height: "auto", margin: "0 1.2rem" }}
                />
            </div>
            <div className="border-line"></div>
            {
                emailSent ? (<EmailSent />) :
                    (
                        <>
                            <h5>Thanks for taking the time to reach out. How can I help you today?</h5>
                            <form id="form" onSubmit={sendEmail}>
                                <div className="field">
                                    <label htmlFor="from_name">Full Name</label>
                                    <input type="text" name="from_name" id="from_name" required/>
                                </div>

                                <div className="field">
                                    <label htmlFor="reply_to">Email Address</label>
                                    <input type="email" name="reply_to" id="reply_to" required/>
                                </div>

                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea type="textarea" name="message" id="message" rows="4" cols="25" wrap="hard" required/>
                                </div>

                                <input type="text" name="to_name" id="to_name" defaultValue="Usama Ali" hidden />

                                <input type="submit" id="button" value="Send" />
                            </form>
                        </>
                    )

            }
        </div>
    )
}

export default ContactMeForm;
