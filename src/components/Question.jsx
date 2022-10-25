import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { recapQuestion } from "../features/answerSlice";
import { v4 as uuid } from "uuid";
import { formatedData } from "../utils/formatData.js";

const Question = ({ data, order }) => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [id, setId] = useState(uuid());

  const shuffleAnswers = () => {
    const allAnswers = [...data?.incorrect_answers, data?.correct_answer];
    const shuffledArray = allAnswers.sort((a, b) => 0.5 - Math.random());
    setAnswers(shuffledArray);
  };

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    setQuestion(data?.question);
    shuffleAnswers();
    setCorrectAnswer(data?.correct_answer);
  }, [data]);

  useEffect(() => {
    dispatch(
      recapQuestion({
        id,
        order,
        answers,
        correctAnswer,
        selectedAnswer,
        question,
      })
    );
  }, [selectedAnswer]);

  return (
    <div className="container">
      <div className="question">{formatedData(data?.question)}</div>
      <div className="responses">
        {answers?.map((answer, index) => (
          <span
            className="answer"
            key={`answer-${index}`}
            onClick={() => selectAnswer(answer)}
            style={{ backgroundColor: answer === selectedAnswer && "#cacbce" }}
          >
            {formatedData(answer)}
          </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Question;
