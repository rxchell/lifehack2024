import React from 'react';
import './style/home.css';
import './style/pages.css';
import quiz from '../data/quiz.json';

import Header from '../components/header';
import Chatbot from '../components/chatbot';
import QuizCard from '../components/quiz_cards';
import Footer from '../components/footer';

function Home() {
    return (
        <div className="Home">
            <Header />
            <Chatbot />

            <div className="home-content">
                <h1 className="pages-title">Welcome to ScamSense</h1>
                <h1 className="pages-subtitle">Your guide to financial scams</h1>
                <p className="home-description">Let's combat financial frauds!</p>

                <div className="quiz-cards">
                    {quiz.map((quizItem) => (
                        <QuizCard key={quizItem.url} data={quizItem} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Home;