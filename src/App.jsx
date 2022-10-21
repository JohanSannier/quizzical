import React, { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <main>
      {!startQuiz ? (
        <Home startQuiz={setStartQuiz} />
      ) : (
        <Quiz startQuiz={setStartQuiz} />
      )}
    </main>
  );
};

export default App;
