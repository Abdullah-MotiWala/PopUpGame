//Firebase Integeration
const firebaseConfig = {
  apiKey: "AIzaSyCKJnJOm2bKw6c2rk4gqUWjInEvGy0SykA",
  authDomain: "hackathoneapp-01.firebaseapp.com",
  projectId: "hackathoneapp-01",
  storageBucket: "hackathoneapp-01.appspot.com",
  messagingSenderId: "931839995905",
  appId: "1:931839995905:web:0750dde6a5ca0e50d85000",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
