import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD1orbkYwWosXqIFrrn9HE-bMCqcmO3_pE",
  authDomain: "story-hub-f0e87.firebaseapp.com",
  projectId: "story-hub-f0e87",
  storageBucket: "story-hub-f0e87.appspot.com",
  messagingSenderId: "568887930160",
  appId: "1:568887930160:web:0c194c6588c6ccbd6aacf5"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();