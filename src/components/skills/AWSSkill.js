import React from 'react';
import { ReactComponent as ReactLogo } from "../../static/svgs/cloud_hosting_aodd.svg";

function AWSSkill() {
    return (
        <div className="my-skill">
            <ReactLogo className="skills-logo" />
            <br />
            <div className="text-container">
                <h3>
                    Cloud Developer
                </h3>
                <p>
                    I love to create scalable and cost efficient solutions using different AWS services.
                </p>

                <br />
                <h4>
                    Languages I Command in:
                </h4>

                <p>Lambda</p>
                <p>Textract</p>
                <p>S3</p>
                <p>EC2</p>
                <p>DynamoDB</p>
                <p>Rekognition</p>
                <p>SNS/SQS/SES</p>
            </div>
        </div>
    )
}
export default AWSSkill;
