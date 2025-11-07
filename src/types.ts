export type Option = {
  id: string;
  label: string;
};

export type QuestionBase = {
  id: string;
  title: string;
  type: 'single' | 'multiple';
  options: Option[];
};

export type Page = {
  id: string;
  questions: QuestionBase[];
};

export type Survey = {
  id: string;
  title?: string;
  pages: Page[];
};

export type AnswersState = Record<string, string[] | undefined>;