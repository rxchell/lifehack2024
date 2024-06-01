import React from 'react';
import { useNavigate } from "react-router-dom";
import quiz from '../data/quiz.json';
import './style/pages.css';

import Header from '../components/header';
import QuizCard from '../components/quiz_cards';
import Footer from '../components/footer'

function QuizPage() {
    return (
        <div >
            <Header />

            <h1 className='pages-title'>Quiz Page</h1>

            <div className="content" overflow="scroll">
                {quiz.map((quizItem) => (
                    <QuizCard key={quizItem.url} data={quizItem} />
                ))}
            </div>

            <Footer />

        </div>
    );
}

export default QuizPage;