import React from 'react';
import Example1 from './Example1';
import "./Examples.scss";

const Examples = () => {
    return (
        <div className="examples__maindiv">
            <Example1 />
            <Example1 />
            <Example1 />
        </div>
    )
}

export default Examples;
