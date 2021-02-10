import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//Components
import QuestionCard from "./components/QuestionCard";

const TOTAL_Questions = 10;

const App = () => {
  //State

  const [loding, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //Functions
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  //Render
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        START
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_Questions}
        question={questions[number].question}
        answers={question[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
