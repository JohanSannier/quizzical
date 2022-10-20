import React, { useEffect, useState } from "react";

const Question = ({ data, transferAnswers }) => {
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const shuffleAnswers = () => {
    const allAnswers = [...data?.incorrect_answers, data?.correct_answer];
    const shuffledArray = allAnswers.sort((a, b) => 0.5 - Math.random());
    setAnswers(shuffledArray);
  };

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    shuffleAnswers();
    setCorrectAnswer(data?.correct_answer);
  }, [data]);

  return (
    <div className="container">
      <div className="question">{data?.question}</div>
      <div className="responses">
        {answers?.map((answer, index) => (
          <span
            className="answer"
            key={`answer-${index}`}
            onClick={() => selectAnswer(answer)}
            style={{ backgroundColor: answer === selectedAnswer && "#cacbce" }}
          >
            {answer}
          </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Question;
