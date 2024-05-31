import React from 'react';
import { useNavigate } from "react-router-dom";
import './style/home.css';
import './style/pages.css';
import quiz from '../data/quiz.json';

import Header from '../components/header';
import Chatbot from '../components/chatbot';
import QuizCard from '../components/quiz_cards';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <Header />
            <Chatbot />

            <div className="home-content">
                <h1 className="pages-title">Home</h1>
                <p className="home-description">Description</p>

                <div className="quiz-cards">
                    {quiz.map((quizItem) => (
                        <QuizCard key={quizItem.url} data={quizItem} />
                    ))}
                </div>
            </div>
        </div>
    )

        

}

export default Home;