// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrtZiFxH9KH7kzY2kWyOUkHEaVOX_soag",
  authDomain: "whats-app-clone-7b442.firebaseapp.com",
  projectId: "whats-app-clone-7b442",
  storageBucket: "whats-app-clone-7b442.appspot.com",
  messagingSenderId: "1029010408331",
  appId: "1:1029010408331:web:ec08ebb5fc0c02163fa58e"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const storage = firebase.storage();

export { storage };