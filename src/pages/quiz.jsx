import React from 'react';
import { useNavigate } from "react-router-dom";

import Header from '../components/header';

function QuizPage() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
        <h1>Quiz Page</h1>
        </div>
    );
}

export default QuizPage;