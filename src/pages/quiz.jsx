import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';

function QuizPage() {
    return (
        <div>
            <Header />
            <h1 className='pages-title'>Quiz</h1>
            <Chatbot />
            <Footer />
        </div>
    );
}

export default QuizPage;