import { useState } from 'react';
import { Survey, AnswersState, Page } from '../types';

export const useSurvey = (survey: Survey) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const pages = survey.pages;
  const currentPage: Page = pages[pageIndex];
  const isLast = pageIndex === pages.length - 1;
  const progress = isCompleted ? 1 : (pageIndex + 1) / pages.length;

  const totalQuestions = pages.reduce((sum, page) => sum + page.questions.length, 0);
  const currentQuestionNumber = pages
    .slice(0, pageIndex)
    .reduce((sum, page) => sum + page.questions.length, 0);

  const isCurrentPageAnswered = currentPage.questions.every((q) => {
    const answer = answers[q.id];
    return answer !== undefined && Array.isArray(answer) && answer.length > 0;
  });

  const updateAnswer = (questionId: string, selected: string[] | undefined) => {
    setAnswers((prev) => {
      if (selected === undefined) {
        const newAnswers = { ...prev };
        delete newAnswers[questionId];
        return newAnswers;
      }
      return {
        ...prev,
        [questionId]: selected,
      };
    });
  };

  const goNext = () => {
    if (!isLast && isCurrentPageAnswered) {
      setPageIndex((i) => i + 1);
    } else if (isLast && isCurrentPageAnswered && !isCompleted) {
      setIsCompleted(true);
    }
  };

  const skipAndGoNext = (questionId: string) => {
    setAnswers((prev) => {
      const newAnswers = {
        ...prev,
        [questionId]: [],
      };

      const allQuestionsAnswered = currentPage.questions.every((q) => {
        const answer = newAnswers[q.id];
        return answer !== undefined;
      });

      if (allQuestionsAnswered) {
        setTimeout(() => {
          if (isLast) {
            setIsCompleted(true);
          } else {
            setPageIndex((i) => i + 1);
          }
        }, 300);
      }

      return newAnswers;
    });
  };

  const reset = () => {
    setPageIndex(0);
    setAnswers({});
    setIsCompleted(false);
  };

  return {
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
  };
};

