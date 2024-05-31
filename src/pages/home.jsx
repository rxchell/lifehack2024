import React from 'react';
import { useNavigate } from "react-router-dom";
import './style/home.css';

import Header from '../components/header';
import Chatbot from '../components/chatbot';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <Header />
            <Chatbot />

            <div className="home-content">
                <h1 className="home-title">Home page</h1>
                <p className="home-description">Description</p>
                <button onClick={() => navigate('/new-page')}>new page</button>
            </div>
        </div>
    )

        

}

export default Home;