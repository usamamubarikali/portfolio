import React from 'react';
import { ReactComponent as ProgrammingLogo } from "../../static/svgs/programming_2svr.svg";

function PythonSkill() {
    return (
        <div className="my-skill">
            <ProgrammingLogo className="skills-logo" />
            <div className="text-container">
                <h3>
                    Back-end Developer
                </h3>
                <p>
                    I love writing scripts that solve complex problems, developing API's and databases management.
                </p>

                <br />
                <h4>
                    Languages I Command in:
                </h4>

                <p>Python</p>
                <p>Django</p>
                <p>PostgreSQL</p>
                <p>Flask</p>
                <p>Pandas</p>
                <p>Numpy</p>
                <p>Integromat/Zapier</p>
            </div>
        </div>
    )
}
export default PythonSkill;
