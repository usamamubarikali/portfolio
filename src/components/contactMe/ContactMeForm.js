import React from 'react';
import signature from '../../static/images/signature.png';
import Avatar from 'avataaars';

const ContactMeForm = ({ toggleContactMe }) => {
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
                    eyeType='Happy'
                    eyebrowType='Default'
                    mouthType='Smile'
                    skinColor='Tanned'
                    style={{ width: "7rem", height: "auto", margin: "0 1.2rem" }}
                />
            </div>
            <div className="border-line"></div>
            <h5>Thanks for taking the time to reach out. How can I help you today?</h5>
            <form id="form">
                <div className="field">
                    <label for="from_name">Full Name</label>
                    <input type="text" name="from_name" id="from_name" />
                </div>

                <div className="field">
                    <label for="reply_to">Email Address</label>
                    <input type="email" name="reply_to" id="reply_to" />
                </div>

                <div className="field">
                    <label for="message">Message</label>
                    <textarea type="textarea" name="message" id="message" rows="4" cols="25" wrap="hard" />
                </div>

                <input type="text" name="to_name" id="to_name" value="Usama Ali" hidden />

                <input type="submit" id="button" value="Send" />
            </form>
        </div>
    )
}

export default ContactMeForm;
