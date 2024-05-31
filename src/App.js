import shield from './assets/shield.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from './pages/home';
import QuizPage from './pages/quiz';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/quizpage" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
