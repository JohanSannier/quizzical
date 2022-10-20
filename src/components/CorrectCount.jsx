import React from "react";
import { useSelector } from "react-redux";

const CorrectCount = () => {
  const answers = useSelector((state) => state.answers);

  const numOfCorrectChoice = () => {
    const res = answers.filter(
      (answer) => answer.selectedAnswer === answer.correctAnswer
    );
    return res.length;
  };

  numOfCorrectChoice();

  return <div>You scored {numOfCorrectChoice()}/5 correct answers</div>;
};

export default CorrectCount;
