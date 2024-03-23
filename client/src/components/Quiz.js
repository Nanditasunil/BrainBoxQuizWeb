import React, { useEffect } from "react";
import Questions from "./Questions";

// redux store import
import { useSelector, useDispatch } from "react-redux";
import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";
export default function Quiz() {
  // const trace = useSelector((state) => state.questions.trace);

  const { queue, trace } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    console.log("On Next Click");
    // update trace value by 1
    if (trace < queue.length) {
      dispatch(moveNextQuestion());
    }
  }
  function onPrev() {
    console.log("On Prev Click");
    if (trace > 0) {
      dispatch(movePrevQuestion());
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      {/* display questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
