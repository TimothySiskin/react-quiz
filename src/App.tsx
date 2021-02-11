import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//Components
import QuestionCard from "./components/QuestionCard";
//Types
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

//Variables
const TOTAL_Questions = 10;

const App = () => {
  //State

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //Functions

  //console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_Questions,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;
      //Chceck aswer is correct answer
      const correct = questions[number].correct_answer === answer;
      //Add Score if answer is correct
      if (correct) {
        setScore((prev) => prev + 1);
      }
      //Save answer in the array user answer
      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //Move to the next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_Questions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  //Render
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_Questions ? (
        <button className="start" onClick={startTrivia}>
          START
        </button>
      ) : null}
      {gameOver === false ? <p className="score">Score: {score}</p> : null}
      {loading ? <p>Loading Questions ...</p> : null}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_Questions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_Questions - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        )}
    </div>
  );
};

export default App;
