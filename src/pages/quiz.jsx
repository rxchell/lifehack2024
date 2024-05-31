import React from 'react';
import { useNavigate } from "react-router-dom";

function QuizPage() {
    const navigate = useNavigate();

    return (
        <div>
        <h1>Quiz Page</h1>
        <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
}

export default QuizPage;