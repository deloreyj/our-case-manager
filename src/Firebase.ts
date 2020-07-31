// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCmGllmPpPTdp_oeopiZJQL2wGloZXg30",
  authDomain: "our-case-manager.firebaseapp.com",
  databaseURL: "https://our-case-manager.firebaseio.com",
  projectId: "our-case-manager",
  storageBucket: "our-case-manager.appspot.com",
  messagingSenderId: "407951053364",
  appId: "1:407951053364:web:ed4910adf010c5f9b23061",
  measurementId: "G-MTVJ907Z59",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
