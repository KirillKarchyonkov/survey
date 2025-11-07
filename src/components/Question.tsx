import React from 'react';
import { QuestionBase } from '../types';
import '../styles/Question.css';

interface QuestionProps {
  question: QuestionBase;
  questionNumber: number;
  totalQuestions: number;
  selected: string[] | undefined;
  onChange: (newSelected: string[] | undefined) => void;
  onSkip?: () => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selected,
  onChange,
  onSkip,
}) => {
  const isSingle = question.type === 'single';

  const handleToggle = (optionId: string) => {
    if (isSingle) {
      onChange([optionId]);
      return;
    }
    const set = new Set(selected ?? []);
    if (set.has(optionId)) set.delete(optionId);
    else set.add(optionId);
    const newSelected = Array.from(set);
    onChange(newSelected.length > 0 ? newSelected : undefined);
  };

  return (
    <article className="question-card">
      <div className="question-header">
        <span className="question-number">
          {questionNumber} из {totalQuestions}
        </span>
      </div>
      <h2 className="question-title">{question.title}</h2>
      <ul className="options-list">
        {question.options.map((opt) => {
          const checked = (selected ?? []).includes(opt.id);
          return (
            <li key={opt.id}>
              <label className="option-item">
                <span>{opt.label}</span>
                <input
                  type={isSingle ? 'radio' : 'checkbox'}
                  name={question.id}
                  checked={checked}
                  onChange={() => handleToggle(opt.id)}
                />
              </label>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="button-skip"
        onClick={() => {
          onChange([]);
          if (onSkip) {
            onSkip();
          }
        }}
      >
        Затрудняюсь ответить / Не помню
      </button>
    </article>
  );
};