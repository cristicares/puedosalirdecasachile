import React,{ Component } from 'react';
import { properties } from '../resources/sentences.js';

class Sentence extends Component{
    render() {
        const x = Math.floor(Math.random() * 5);
        return (
            <div>
                {properties[x]}
            </div>
        );
    }
}

export default Sentence;
