import React from 'react';
import './Skills.scss';
import ReactSkill from './ReactSkill';
import AWSSkill from './AWSSkill';
import PythonSkill from './PythonSkill';

function Skills() {
    return (
        <div className="skills__maindiv">
            <ReactSkill />
            <div className="border-line"></div>
            <PythonSkill />
            <div className="border-line"></div>
            <AWSSkill />
        </div>
    )
}

export default Skills
