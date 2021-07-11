import React from 'react';
import "./Examples.scss";
import companyLogo from '../../../static/images/matrix-logo.jpg';
const Example2 = () => {
    return (
        <div className="workexample">
            {/* <img src={companyLogo} /> */}
            <div>
                <a href="https://github.com/usamamubarikali/ecommerce" target="_blank">
                    <h2>
                        Documents Processing
                    </h2>
                </a>
                <p>
                    Automated the process of extracting and pre-processing Key-Value pairs
                    from PDF files when uploaded in S3 bucket.
                    The data extracted was formatted and uploaded to AWS Redshift.
                    This project saved many hours of manual work and was able to process
                    multiple PDF Files at a time.
                </p>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <p>
                    AWS Lambda, S3, Textract, Redshift, Python 3.8, PyPDF2, Pandas, Boto3
                </p>
            </div>
        </div>
    )
}

export default Example2;
