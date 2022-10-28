import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setOptions } from "../features/selectSlice";
import { triviaCategories } from "../utils/triviaCategories.js";

const Home = ({ startQuiz }) => {
  const categoryRef = useRef();
  const difficultyRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    startQuiz(true);

    dispatch(
      setOptions({
        category:
          categoryRef.current.value !== "null"
            ? categoryRef.current.value
            : null,
        difficulty:
          difficultyRef.current.value !== "null"
            ? difficultyRef.current.value
            : null,
      })
    );
  };

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <section className="home">
      <h1>Quizzical</h1>
      <p>Improve your knowledge with our quiz!</p>
      <p className="optional">
        <span>Optional:</span> <br />
        If you want, you can choose either a category, a difficulty or both!
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select name="category" ref={categoryRef}>
          <option value="null">--Choose a category--</option>
          {triviaCategories.sort(compare).map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select name="difficulty" ref={difficultyRef}>
          <option value="null">--Choose a difficulty--</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit">Start quiz</button>
      </form>
    </section>
  );
};

export default Home;
