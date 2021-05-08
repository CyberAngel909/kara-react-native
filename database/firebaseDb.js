import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBKuWLCPgTPdAM_ynZeUMmB0-rdM-NyqJQ",
    authDomain: "karaoke-reactnative-app.firebaseapp.com",
    databaseURL: "https://karaoke-reactnative-app-default-rtdb.firebaseio.com",
    projectId: "karaoke-reactnative-app",
    storageBucket: "karaoke-reactnative-app.appspot.com",
    messagingSenderId: "514323093845",
    appId: "1:514323093845:web:eef4922837cacbf46ef7dc",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;