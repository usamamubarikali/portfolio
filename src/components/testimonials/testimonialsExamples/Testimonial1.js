import React from 'react';
import './Testimonial.scss';
import picture from '../../../static/images/AvatarMaker.png';

function Testimonial1() {
    return (
        <div className="testimonial__maindiv">
            <img src={picture}/>
            <p>“Usama's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”</p>
            <h4>Umair Khalil</h4>
            <p className="profession">Sr. Systems Developer, Domain7</p>
        </div>
    )
}

export default Testimonial1;
