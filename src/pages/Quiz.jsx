import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CorrectCount from "../components/CorrectCount";
import Question from "../components/Question";
import Result from "../components/Result";
import { clearQuiz } from "../features/answerSlice";

const Quiz = ({ startQuiz }) => {
  const [data, setData] = useState([]);
  const seeAnswers = useSelector((state) => state.answers);
  const [showAnswers, setShowAnswers] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector((state) => state.select);
  const [waiting, setWaiting] = useState(false);

  const getQuestions = () => {
    const baseUrl = "https://opentdb.com/api.php?amount=5";
    const addDifficulty =
      select?.difficulty !== null ? `&difficulty=${select?.difficulty}` : "";
    const addCategory =
      select?.category !== null ? `&category=${select?.category}` : "";
    try {
      fetch(`${baseUrl}${addDifficulty}${addCategory}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.results);
          setWaiting(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const checkAnswers = () => {
    if (showAnswers) {
      setWaiting(true);
      getQuestions();
      dispatch(clearQuiz());
      setShowAnswers(false);
    } else {
      setShowAnswers(true);
    }
  };

  useEffect(() => {
    setWaiting(true);
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
      <button className="backHome" onClick={() => startQuiz(false)}>
        Home
      </button>
      <div id="loader" style={{ display: waiting ? "" : "none" }}>
        Loading questions...
      </div>
    </section>
  );
};

export default Quiz;
