import React from 'react';
import { demoSurvey } from './data/survey';
import { useSurvey } from './hooks/useSurvey';
import { ProgressBar } from './components/ProgressBar';
import { Question } from './components/Question';
import './styles/App.css';

export const App: React.FC = () => {
  const {
    currentPage,
    answers,
    progress,
    isLast,
    isCompleted,
    isCurrentPageAnswered,
    totalQuestions,
    currentQuestionNumber,
    updateAnswer,
    goNext,
    skipAndGoNext,
    reset,
  } = useSurvey(demoSurvey);

  if (isCompleted) {
    return (
      <main className="app">
        <div className="container">
          <div className="progress-container">
            <ProgressBar value={progress} />
          </div>

          <section className="completion">
            <h2 className="completion-title">Опрос завершён</h2>
            <p className="completion-text">Спасибо за прохождение опроса!</p>
          </section>

          <nav className="controls">
            <button type="button" className="button-restart" onClick={reset}>
              Пройти заново
            </button>
          </nav>
        </div>
      </main>
    );
  }

  return (
    <main className="app">
      <div className="container">
        <div className="progress-container">
          <ProgressBar value={progress} />
        </div>

        <div className="questions-grid">
          {currentPage.questions.map((q, questionIndex) => (
            <Question
              key={q.id}
              question={q}
              questionNumber={currentQuestionNumber + questionIndex + 1}
              totalQuestions={totalQuestions}
              selected={answers[q.id]}
              onChange={(sel) => updateAnswer(q.id, sel)}
              onSkip={() => skipAndGoNext(q.id)}
            />
          ))}
        </div>

        <nav className="controls">
          <button
            type="button"
            className="button-next"
            onClick={goNext}
            disabled={!isCurrentPageAnswered}
          >
            {isLast ? 'Завершить' : 'Далее'}
          </button>
        </nav>
      </div>
    </main>
  );
};

