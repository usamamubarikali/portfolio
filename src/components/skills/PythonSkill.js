import React from 'react';
import {ReactComponent as ProgrammingLogo} from "../../static/svgs/programming_2svr.svg";

function PythonSkill() {
    return (
        <div className="my-skill">
            <ProgrammingLogo className="skills-logo" />
            <h3>
                Back-end Developer
            </h3>
            <p>
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>

            <br />
            <h4>
                Languages I speak:
            </h4>
            <p>
                HTML, Pug, Slim, CSS, Sass, Less
            </p>
            
            <br />
            <h4>
                Dev Tools:
            </h4>

            <p>Atom</p>
            <p>Bootstrap</p>
            <p>Github</p>
            <p>Terminal</p>
            <p>Atom</p>
            <p>Atom</p>
        </div>
    )
}
export default PythonSkill;
