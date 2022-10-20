import React, { useEffect, useState } from "react";
import Question from "../components/Question";

const Quiz = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch("https://opentdb.com/api.php?amount=5")
        .then((res) => res.json())
        .then((res) => setData(res.results));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="quiz">
      {data?.map((question, index) => (
        <Question data={question} key={index} />
      ))}
      <button className="submit">Check answers</button>
    </section>
  );
};

export default Quiz;
