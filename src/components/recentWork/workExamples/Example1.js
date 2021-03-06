import React from 'react';
import "./Examples.scss";
import companyLogo from '../../../static/images/matrix-logo.jpg';
const Example1 = () => {
    return (
        <div className="workexample">
            {/* <img src={companyLogo} /> */}
            <div>
                <a href="https://github.com/usamamubarikali/ecommerce" target="_blank">
                    <h2>
                        E-Commerce
                    </h2>
                </a>
                <p>
                    Implemented user authentication by Two factor authentication 
                    through  user email or by using Google Auth.
                    User can Perform CRUD operation in form of REST API for e-commerce products
                    only if they are authenticated. Frontend is implemented in React.js
                </p>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <p>
                    Django, Django Rest Framework, Djoser, Corsheaders
                </p>
            </div>
        </div>
    )
}

export default Example1;
