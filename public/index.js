import { App } from '/App.js';
//import { initializeApp } from 'firebase/app';
import { createRoot } from 'react-dom/client'
import React from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdjPP6oTh9WMWgD6fNqvUr0YBgns3dIZ8",
  authDomain: "theconnect4app.firebaseapp.com",
  databaseURL: "https://theconnect4app-default-rtdb.firebaseio.com",
  projectId: "theconnect4app",
  storageBucket: "theconnect4app.appspot.com",
  messagingSenderId: "958341876928",
  appId: "1:958341876928:web:5ca6d83834f6fe32e37125"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById("root"));
root.render(App);

