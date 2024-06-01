import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './style/quiz_cards.css';

function QuizCard (props) {
    const navigate = useNavigate();

    const { data } = props;

    return (
        <div className="quiz-card" onClick={() => navigate('/quizpage/phishing-scam')} title="Test your knowledge!">
            <p className="quiz-card-title">{data.title}</p>
            <img src={data.img} alt={data.title} className="quiz-card-image" />
        </div>
    )
}

export default QuizCard;