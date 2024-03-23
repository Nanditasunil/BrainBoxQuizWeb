import React, { useEffect, useState } from "react";
import Questions from "./Questions";

// redux store import
import { useSelector, useDispatch } from "react-redux";
import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

export default function Quiz() {
  // const trace = useSelector((state) => state.questions.trace);
  const [check, setChecked] = useState(undefined);
  const state = useSelector((state) => state);
  const { queue, trace } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  });

  function onNext() {
    console.log("On Next Click");
    // update trace value by 1
    if (trace < queue.length) {
      dispatch(moveNextQuestion());

      dispatch(PushAnswer(check));
    }
  }
  function onPrev() {
    console.log("On Prev Click");
    if (trace > 0) {
      dispatch(movePrevQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      {/* display questions */}
      <Questions onChecked={onChecked} />

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
