import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CorrectCount from "../components/CorrectCount";
import Question from "../components/Question";
import Result from "../components/Result";
import { clearQuiz } from "../features/answerSlice";

const Quiz = () => {
  const [data, setData] = useState([]);
  const seeAnswers = useSelector((state) => state.answers);
  const [showAnswers, setShowAnswers] = useState(false);
  const dispatch = useDispatch();

  const getQuestions = () => {
    try {
      fetch("https://opentdb.com/api.php?amount=5")
        .then((res) => res.json())
        .then((res) => setData(res.results));
    } catch (error) {
      console.log(error);
    }
  };

  const checkAnswers = () => {
    if (showAnswers) {
      getQuestions();
      dispatch(clearQuiz());
      setShowAnswers(false);
    } else {
      setShowAnswers(true);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <section className="quiz">
      {!showAnswers &&
        data?.map((question, index) => (
          <Question data={question} key={index} order={index} />
        ))}
      {showAnswers &&
        [...seeAnswers]
          .sort((a, b) => a.order - b.order)
          .map((result) => <Result result={result} key={result.id} />)}
      <div className="count-container">
        {showAnswers && <CorrectCount />}
        <button className="submit" onClick={checkAnswers}>
          {!showAnswers ? "Check answers" : "Play again"}
        </button>
      </div>
    </section>
  );
};

export default Quiz;
