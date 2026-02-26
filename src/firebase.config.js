// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

// const firebaseConfig = {

//   apiKey: "AIzaSyAk5TbJqSu3yl39BdHr9YNhvEw8pqPrXqY",
// AIzaSyAk5TbJqSu3yl39BdHr9YNhvEw8pqPrXqY

//   authDomain: "dragon-news-authen.firebaseapp.com",
//   projectId: "dragon-news-authen",
//   storageBucket: "dragon-news-authen.firebasestorage.app",
//   messagingSenderId: "1042080174744", 
// 1042080174744
//   appId: "1:1042080174744:web:ac54cbf1253f81e67ef6ed"
// :web:9e0a50bf28a2b07d7ef6ed"
// };

