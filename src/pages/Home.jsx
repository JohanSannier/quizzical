import React from "react";

const Home = ({ startQuiz }) => {
  return (
    <section className="home">
      <h1>Quizzical</h1>
      <p>Improve your knowledge with our quiz!</p>
      <button onClick={() => startQuiz(true)}>Start quiz</button>
    </section>
  );
};

export default Home;
