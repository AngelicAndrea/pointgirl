import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD3th8Df7DVN2l7RHaoNxriJBCA1eKGFw0",
    authDomain: "purpledots-1553038712580.firebaseapp.com",
    databaseURL: "https://purpledots-1553038712580.firebaseio.com",
    projectId: "purpledots-1553038712580",
    storageBucket: "purpledots-1553038712580.appspot.com",
    messagingSenderId: "401742821316"
  };
  firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;