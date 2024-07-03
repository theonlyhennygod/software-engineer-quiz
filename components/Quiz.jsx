"use client";

import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import html2canvas from 'html2canvas';
import { questions as allQuestions } from '../data/questions';
import BackgroundMusic from '../components/BackgroundMusic';
import Footer from '../components/Footer';

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
  const scoreRef = useRef(null);

  useEffect(() => {
    if (timeLeft === 0) {
      handleUnansweredQuestion();
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

  const handleUnansweredQuestion = () => {
    setIncorrectAnswers(incorrectAnswers + 1);
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

  const handleShareScore = async () => {
    const canvas = await html2canvas(scoreRef.current);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'quiz-score.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {showConfetti && <Confetti />}
      <BackgroundMusic />
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-center">{questions[currentQuestion].question}</h2>
        <div className="flex flex-col space-y-4 w-full">
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
        <div ref={scoreRef} className="mt-4 text-center">
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          <p>Time left: {timeLeft} seconds</p>
        </div>
        <button
          onClick={handleResetQuiz}
          className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Reset Quiz
        </button>
        {showConfetti && (
          <button
            onClick={handleShareScore}
            className="mt-4 py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Share Score
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
