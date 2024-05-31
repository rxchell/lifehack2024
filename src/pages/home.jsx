import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return <div>

        <h1>ScamSense</h1>
        <button onClick={() => navigate('/quizpage')}>Quiz</button>
        <button>Chatbot</button>
    </div>;

}

export default Home;