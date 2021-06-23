import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyByhxwiybjKIK7ZLsJM199bM4ltJo_u3uY",
    authDomain: "story-hub-1cbe9.firebaseapp.com",
    databaseURL: "https://story-hub-1cbe9-default-rtdb.firebaseio.com",
    projectId: "story-hub-1cbe9",
    storageBucket: "story-hub-1cbe9.appspot.com",
    messagingSenderId: "223015138882",
    appId: "1:223015138882:web:f5f4d05e34eff1476e5fdb"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();