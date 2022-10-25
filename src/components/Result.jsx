import React from "react";
import { formatedData } from "../utils/formatData.js";

const Result = ({ result }) => {
  return (
    <div className="container">
      <div className="question">{formatedData(result?.question)}</div>
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
            {formatedData(answer)}
          </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Result;
