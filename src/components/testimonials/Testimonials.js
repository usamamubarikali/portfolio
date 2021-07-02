import React from 'react';
import './Testimonials.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Testimonial1 from './testimonialsExamples/Testimonial1';

const Testimonials = () => {
    return (
        <div className="slide-container">
            <h3>Testimonials</h3>
            <p>People I've worked with have said some nice things...</p>
            <Slide>
                <div className="each-slide">
                    <Testimonial1 />
                </div>
                <div className="each-slide">
                    <Testimonial1 />
                </div>
                <div className="each-slide">
                    <Testimonial1 />
                </div>
            </Slide>
        </div>
    )
}

export default Testimonials;
