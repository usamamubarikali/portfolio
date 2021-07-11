import React from 'react';
import { ReactComponent as ReactLogo } from "../../static/svgs/react_y7wq.svg";

function ReactSkill() {
    return (
        <div className="my-skill">
            <ReactLogo className="skills-logo" />
            <div className="text-container">
                <h3>
                    Front-end Developer
                </h3>
                <p>
                    I create best looking responsive websites while keeping the best practices into consideration.
                </p>

                <br />
                <h4>
                    Languages I Command in:
                </h4>

                <p>React.js</p>
                <p>Javascript/Typescript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Redux</p>
                <p>React Hooks</p>
                <p>Context API</p>
            </div>
        </div>
    )
}
export default ReactSkill;
