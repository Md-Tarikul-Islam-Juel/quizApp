import React, { useReducer, useState } from 'react';

import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Answer from '../../components/Answer/Answer';
import ProgressBar from '../../components/ProgressBar/Progressbar';
import useQuestions from '../../hooks/useQuestions';
import './Quiz.css';

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case 'questions':
            action.value.foreach((question) => {
                question.options.foreach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        default:
            return state;
    }
};

function Quiz() {
    const { id } = useParams();
    const { loading, error, questions } = useQuestions();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [qna, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h3 className="question-title">
                1. What is the difference between list and tuples in Python?
            </h3>
            <h5 className="answer-fixed-title">Question have multiple answer</h5>
            <Answer />
            <Button className="answer-submit-btn" variant="success">
                Submit
            </Button>
            <div className="progressbar">
                <ProgressBar />
            </div>
        </>
    );
}

export default Quiz;
