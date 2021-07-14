import React from 'react';
import "./Examples.scss";
import companyLogo from '../../../static/images/matrix-logo.jpg';
const Example3 = () => {
    return (
        <div className="workexample">
            {/* <img src={companyLogo} /> */}
            <div>
                <a href="https://github.com/usamamubarikali/ecommerce" target="_blank">
                    <h2>
                        Document Recognition
                    </h2>
                </a>
                <p>
                    Automated the process of tax document (1099, W2, Paystubs, 1040) recognition making the screening process less prone to errors.
                    The Machine Learning model had real time response hence the user is prompted to reupload the correct document.
                </p>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <p>
                    Rekognition, API Gateway, S3, Lambda, Python 3.8, Boto3, Fitz
                </p>
            </div>
        </div>
    )
}

export default Example3;
