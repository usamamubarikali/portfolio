import React from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';
import "./Examples.scss";

const Examples = () => {
    return (
        <div className="examples__maindiv">
            <Example1 />
            <Example2 />
            <Example3 />
            <Example4 />
            <Example5 />
        </div>
    )
}

export default Examples;
