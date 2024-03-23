import React, { useEffect, useState } from "react";
// import data from "../database/data";

import { useSelector } from "react-redux";

// custom hooks
import { useFetchQuestion } from "../hooks/FetchQuestion";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  // const question = data[0];

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const trace = useSelector((state) => state.questions.trace);

  useEffect(() => {
    // console.log(questions);
  });

  // useEffect(() => {
  //   // console.log(question);
  //   // console.log(isLoading);
  //   // console.log(apiData);
  //   // console.log(serverError);
  // });

  function onSelect(i) {
    // setChecked(true);
    // console.log(i);
    onChecked(i);
  }

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check "></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
