"use client";

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { questions as allQuestions } from '../data/questions';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Quiz = () => {
  const [questions, setQuestions] = useState(shuffleArray(allQuestions));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30);
    } else {
      setShowConfetti(true);
    }
  };

  const handleResetQuiz = () => {
    setQuestions(shuffleArray(allQuestions));
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setShowConfetti(false);
    setTimeLeft(30);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {showConfetti && <Confetti />}
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">{questions[currentQuestion].question}</h2>
        <div className="flex flex-col space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-4">Correct Answers: {correctAnswers}</p>
        <p className="mt-2">Incorrect Answers: {incorrectAnswers}</p>
        <p className="mt-2">Time left: {timeLeft} seconds</p>
        <button
          onClick={handleResetQuiz}
          className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Reset Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
