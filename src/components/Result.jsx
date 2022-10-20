import React from "react";

const Result = ({ result }) => {
  return (
    <div className="container">
      <div className="question">{result?.question}</div>
      <div className="responses">
        {result?.answers.map((answer, index) => (
          <span
            className="answer"
            key={`answer-${index}`}
            style={{
              backgroundColor:
                answer === result.correctAnswer
                  ? "#94D7A2"
                  : answer === result.selectedAnswer
                  ? "#F8BCBC"
                  : "#cacbce",
            }}
          >
            {answer}
          </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Result;
