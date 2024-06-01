import React from 'react';
import './style/home.css';
import './style/pages.css';
import quiz from '../data/quiz.json';

import Header from '../components/header';
import QuizCard from '../components/quiz_cards';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';

function Home() {
    return (
        <div className="Home">
            <Header />

            <div className="home-content">
                <h1 className="pages-title">Welcome to ScamSense</h1>
                <h1 className="pages-subtitle">Your guide to financial scams</h1>
                <p className="home-description">Let's combat financial frauds together!</p>
                <p className="home-description">ScamSense is here to help you be more aware of the ways scammers try to target you. </p>
                <p className="home-description">Try out the following quizzes below to find out your ability at tackling financial frauds!</p>
                <br />
                <h1 className="pages-subtitle">Quizzes</h1>
                <div className="quiz-cards">
                    {quiz.map((quizItem) => (
                        <QuizCard key={quizItem.url} data={quizItem} />
                    ))}
                </div>
            </div>
            <Chatbot />
            <Footer />
        </div>
    )
}



export default Home;