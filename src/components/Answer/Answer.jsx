import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import './Answer.css';

function Answer() {
    return (
        <>
            <div className="answer-parent">
                <CheckBox />
                <CheckBox />
                <CheckBox />
                <CheckBox />
            </div>
        </>
    );
}

export default Answer;
