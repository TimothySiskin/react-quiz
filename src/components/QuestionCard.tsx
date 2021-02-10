import React from "react";

//Types

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <div className="">
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div></div>
    </div>
  );
};

export default QuestionCard;
