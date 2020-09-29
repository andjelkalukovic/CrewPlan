import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA869EQs5p7Qu_IkiCXgt21pRhx088zuPQ",
    authDomain: "your-new-project-list.firebaseapp.com",
    databaseURL: "https://your-new-project-list.firebaseio.com",
    projectId: "your-new-project-list",
    storageBucket: "your-new-project-list.appspot.com",
    messagingSenderId: "56736914179",
    appId: "1:56736914179:web:ecf4eda59158118d7ea736",
    measurementId: "G-23X2LK3YG6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
 //firebase.firestore().settings({ timestampsInSnapshots: true});

 export default firebase;