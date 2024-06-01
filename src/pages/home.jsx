import React from 'react';
import { useNavigate } from "react-router-dom";
import './style/home.css';
import './style/pages.css';
import quiz from '../data/quiz.json';

import Header from '../components/header';
import QuizCard from '../components/quiz_cards';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <Header />

            <div className="home-content">
                <h1 className="pages-title">Home</h1>
                <p className="home-description"> ScamSense is here to help you be more aware of the ways
                scammers try to target you. Let's combat financial frauds together and stay safe from scams!
                <br></br><br></br> Try out the following quizzes below to find out your ability at tackling financial frauds!
                </p>

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