import React from "react";
//Components
import QuestionCard from "./components/QuestionCard";

const App = () => {
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
    </div>
  );
};

export default App;
