import React from 'react';
import './Testimonial.scss';
import picture from '../../../static/images/AvatarMaker.png';

function Testimonial1() {
    return (
        <div className="testimonial__maindiv">
            <img src={picture} />
            <p>“Usama did great work! He is a reliable,
                hard worker who completed the job exactly as required and more.
                I would recommend him to my Croat trusted colleagues.”
            </p>
            <h4>Sipho Simela</h4>
            <p className="profession">Matrix Rental Solution US, CEO</p>
        </div>
    )
}

export default Testimonial1;
