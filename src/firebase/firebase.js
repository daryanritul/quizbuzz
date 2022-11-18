import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from './config';

const auth = getAuth();

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

export const checkProfile = async uid => {
  const docRef = doc(db, 'studentProfiles', uid);
  return await getDoc(docRef);
};

export const setUpProfile = async data => {
  const docRef = doc(db, 'studentProfiles', data.uid);
  return await setDoc(docRef, { ...data });
};

export const setQuizzes = async data => {
  const docRef = doc(db, 'quizzes', data.qid);
  var id = docRef.id;
  return await setDoc(docRef, { ...data });
};
// export const setQuizzes = async data => {
//   console.log(data, 'values');
//   const docRef = doc(collection(db, 'quizzes'));
//   var id = docRef.id;
//   return await setDoc(docRef, { ...data, qid: id });
// };

export const getQuiz = async classes => {
  const docRef = collection(db, 'quizzes');
  const q = query(docRef, where('classes', 'array-contains', classes));
  return await getDocs(q);
};

export const setResult = async (result, uid, qid) => {
  const docRef = doc(db, 'studentProfiles', uid, 'myResult', qid);
  return await setDoc(docRef, { ...result });
};

export const getResult = async uid => {
  const docRef = collection(db, 'studentProfiles', uid, 'myResult');
  return await getDocs(docRef);
};
