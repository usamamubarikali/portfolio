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
                        Smartsheet API
                    </h2>
                </a>
                <p>
                   Developed an API which was triggered when a form was filled in Smartsheet. The API automated different tasks which included creating workspaces, duplicating and renaming files and updating sheets according to the conditions. The API is deployed on HYPER-V Server.
                </p>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <p>
                   Python, Flask, Smartsheet API (Python-SDK), Hyper-V Server 
                </p>
            </div>
        </div>
    )
}

export default Example4;
