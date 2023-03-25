import {
  ADD_QUESTION,
  ADD_XLSX,
  ERROR,
  GET_QUIZ_LIST,
  GET_RESULT,
  REMOVE_QUESTION,
  SET_ACTIVE,
  START,
  UPLOAD_QUIZ_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../action.types';
import { initialState } from '../store';
const reducer = (state, { payload, type }) => {
  switch (type) {
    case START:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authState: true,
        user: payload,
      };
    case UPLOAD_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_QUIZ_LIST:
      return {
        ...state,
        loading: false,
        quizList: payload,
      };
    case ADD_QUESTION:
      const index = state.questions.findIndex(ques => ques.id === payload.id);
      return {
        ...state,
        questions:
          index >= 0
            ? state.questions.map(ques =>
                ques.id === payload.id ? { ...payload } : ques
              )
            : [...state.questions, payload],
      };
    case ADD_XLSX:
      return {
        ...state,
        questions: [...state.questions, ...payload],
      };
    case SET_ACTIVE:
      return {
        ...state,
        activeQuiz: {
          ...payload,
          questions: [],
        },
        questions: payload.questions,
      };
    case REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(ques => ques.id !== payload),
      };
    case GET_RESULT:
      return {
        ...state,
        myResults: payload,
        loading: false,
      };
    case USER_LOGOUT:
      return initialState;
  }
};

export default reducer;
