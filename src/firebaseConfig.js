// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDpU6VPs3kl_rZMW5Iw2BPAnWwg58xAZH4",
  authDomain: "crud-app-4c4ec.firebaseapp.com",
  databaseURL: "https://crud-app-4c4ec-default-rtdb.firebaseio.com",
  projectId: "crud-app-4c4ec",
  storageBucket: "crud-app-4c4ec.appspot.com",
  messagingSenderId: "380726754032",
  appId: "1:380726754032:web:163498a96fd6ef5e932035",
  measurementId: "G-CE843VQTCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

// export default getAnalytics;