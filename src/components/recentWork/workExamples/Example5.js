import React from 'react';
import "./Examples.scss";
import companyLogo from '../../../static/images/matrix-logo.jpg';
const Example4 = () => {
    return (
        <div className="workexample">
            {/* <img src={companyLogo} /> */}
            <div>
                <a href="https://github.com/usamamubarikali/ecommerce" target="_blank">
                    <h2>
                        Email Parser
                    </h2>
                </a>
                <p>
                    Built a Python/Flask app and uploaded to a Hyper V server that 
                    Automated the process of creating a workspace 
                </p>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <p>
                    Integromat, AWS Lambda, s3, Python 3.8, boto3
                </p>
            </div>
        </div>
    )
}

export default Example4;
