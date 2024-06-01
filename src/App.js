import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from './pages/home';
import ResourcesPage from './pages/resources';
import QuizPage from './pages/quiz';
import PhishingScamQuiz from './pages/phishing-scam';
import PhishyActivity from './pages/PhishyActivity';
import Contact from './pages/contact';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/quizpage" element={<QuizPage />} />
            <Route path="/quizpage/phishing-scam" element={<PhishingScamQuiz />} />
            <Route path="/PhishyActivity" element={<PhishyActivity />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
