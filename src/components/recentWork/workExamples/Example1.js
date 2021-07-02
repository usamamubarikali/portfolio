import React from 'react';
import "./Examples.scss";
import companyLogo from '../../../static/images/matrix-logo.jpg';
const Example1 = () => {
    return (
        <div className="workexample">
            <img src={companyLogo} />
            <h2>Matrix Rental Solution</h2>
            <p>A powerful, easy-to-configure form backend for designers and developers. No coding required.</p>
            <a>www.usebasin.com</a>
        </div>
    )
}

export default Example1;
