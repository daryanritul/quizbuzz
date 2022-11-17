import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWrcOAbhs9OrpogdgqoQ8pRF2BLhd5FUE',
  authDomain: 'quizbuzz-app.firebaseapp.com',
  projectId: 'quizbuzz-app',
  storageBucket: 'quizbuzz-app.appspot.com',
  messagingSenderId: '270326415314',
  appId: '1:270326415314:web:bfd563012b71d75fe8920b',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
