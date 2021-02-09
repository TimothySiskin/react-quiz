import React from "react";

//Types

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return <div className="">Question Card</div>;
};

export default QuestionCard;
