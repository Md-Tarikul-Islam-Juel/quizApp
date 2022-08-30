import React from 'react';
import Answer from '../../components/Answer/Answer';
import './Result.css';

function Result() {
    return (
        <>
            <h1>Questions analysis</h1>
            <h4>You answered 2 out of 5 questions correctly</h4>
            <br />

            <div className="result-box">
                <h3>1. What is the difference between list and tuples in Python?</h3>
                <Answer />
            </div>
            <div className="result-box">
                <h3>1. What is the difference between list and tuples in Python?</h3>
                <Answer />
            </div>
            <div className="result-box">
                <h3>1. What is the difference between list and tuples in Python?</h3>
                <Answer />
            </div>
            <div className="result-box">
                <h3>1. What is the difference between list and tuples in Python?</h3>
                <Answer />
            </div>
            <div className="result-box">
                <h3>1. What is the difference between list and tuples in Python?</h3>
                <Answer />
            </div>
        </>
    );
}

export default Result;
