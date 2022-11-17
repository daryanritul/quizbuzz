import { createContext } from 'react';

export const context = createContext();

export const initialState = {
  user: {},
  authState: false,
  loading: false,
  error: false,
  activeQuiz: {
    aurthorName: '',
    qid: '',
    startAt: '',
    closesAt: '',
    classes: [],
    quiz: '',
    duration: '',
    aurthorId: '',
    type: 'mock',
    update: false,
  },
  activeQuestion: {},
  questions: [],
  quizList: [],
};
