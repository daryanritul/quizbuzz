import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  checkProfile,
  getQuiz,
  getResult,
  logOut,
  setQuizzes,
  setResult,
  setUpProfile,
  signIn,
  signUp,
} from '../../firebase/firebase';
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

export const signUpHandler = (email, password, data) => dispatch => {
  dispatch({
    type: START,
  });
  signUp(email, password)
    .then(res => {
      setUpProfile({
        ...data,
        uid: res.user.uid,
      })
        .then(r => {
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {
              uid: res.user.uid,
              ...data,
            },
          });
        })
        .catch(err => {
          dispatch({
            type: ERROR,
          });
        });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
      });
    });
};
export const signInHandler = (email, password) => dispatch => {
  dispatch({
    type: START,
  });
  signIn(email, password)
    .then(res => {
      console.log(res);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          email: res.user.email,
          uid: res.user.uid,
        },
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
      });
    });
};

export const signOutHandler = () => dispatch => {
  dispatch({
    type: START,
  });
  logOut()
    .then(() => {
      dispatch({
        type: USER_LOGOUT,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
      });
    });
};

export const authState = () => dispatch => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    dispatch({
      type: START,
    });
    if (user) {
      checkProfile(user.uid)
        .then(response => {
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {
              ...response.data(),
            },
          });
        })
        .catch(err => {
          dispatch({
            type: ERROR,
          });
        });
    } else {
      dispatch({
        type: ERROR,
      });
    }
  });
};

export const checkProfileHandler = uid => dispatch => {
  checkProfile(uid).then(res => {
    if (res.exists()) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          ...res.data(),
        },
      });
    } else {
      console.log('not found');
    }
  });
};

export const uploadQuiz = data => dispatch => {
  dispatch({
    type: START,
  });
  console.log('Setting');
  setQuizzes(data)
    .then(() => {
      dispatch({
        type: UPLOAD_QUIZ_SUCCESS,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
      });
    });
};

export const getQuizAction = classes => dispatch => {
  dispatch({
    type: START,
  });
  getQuiz(classes)
    .then(snapshot => {
      var list = [];
      snapshot.forEach(doc => {
        list.push(doc.data());
      });
      dispatch({
        type: GET_QUIZ_LIST,
        payload: list,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
      });
    });
};

export const addQuestion = question => dispatch => {
  dispatch({
    type: ADD_QUESTION,
    payload: question,
  });
};
export const addXlsxQuestion = question => dispatch => {
  dispatch({
    type: ADD_XLSX,
    payload: question,
  });
};

export const setActive = data => dispatch => {
  dispatch({
    type: SET_ACTIVE,
    payload: data,
  });
};

export const deleteQuestion = uid => dispatch => {
  dispatch({
    type: REMOVE_QUESTION,
    payload: uid,
  });
};

export const uploadResult = (result, uid, qid) => {
  setResult(result, uid, qid)
    .then(() => {
      console.log('Its Done');
    })
    .catch(err => {
      console.log('Failed', err);
    });
};

export const getMyResults = uid => dispatch => {
  dispatch({
    type: START,
  });
  getResult(uid)
    .then(snapshot => {
      var list = [];
      snapshot.forEach(doc => {
        list.push(doc.data());
      });
      dispatch({
        type: GET_RESULT,
        payload: list,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
      });
    });
};
