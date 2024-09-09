// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBrRVIvhWNLfiNilBLfna1qy4JtxlIkCEg",
    authDomain: "susnet-software-e0c71.firebaseapp.com",
    databaseURL: "https://susnet-software-e0c71-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "susnet-software-e0c71",
    storageBucket: "susnet-software-e0c71.appspot.com",
    messagingSenderId: "1025517202314",
    appId: "1:1025517202314:web:f09cde258372e9ad867673",
    measurementId: "G-ZW3CTYV34N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
