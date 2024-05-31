import React from 'react';
import { useNavigate } from "react-router-dom";
import './style/quiz_cards.css';

function QuizCard (props) {
    const navigate = useNavigate();

    const { data } = props;

    return (
        <div className="quiz-card">
            <p className="quiz-card-title">{data.title}</p>
            <p className="quiz-card-description">{data.description}</p>
        </div>
    )
}

export default QuizCard;