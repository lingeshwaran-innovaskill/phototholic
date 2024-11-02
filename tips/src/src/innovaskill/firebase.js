// import firebase from './firebase';
// import 'firebase/auth';

// var firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
// export default firebase;


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from './firebase'; 
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPzv2hdBb2WTZ_JRp4N8_LCBMZr2M2-uQ",
  authDomain: "otp-generator-6197b.firebaseapp.com",
  projectId: "otp-generator-6197b",
  storageBucket: "otp-generator-6197b.appspot.com",
  messagingSenderId: "82009173017",
  appId: "1:82009173017:web:4e3b7cd8dcadf31a55ce88"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
//  default firebase;

