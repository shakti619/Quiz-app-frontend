import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompeteImg from "../assets/quiz-complete.png";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(
    () => Math.random() - 0.5
  );
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  function handleAnswerClick(answer) {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizCompeteImg} alt="Quiz complete" />
        <h2>Congratulations! bsdk You have completed the quiz.</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((ans) => (
            <li key={ans} className="answer">
              <button onClick={() => handleAnswerClick(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
