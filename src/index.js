import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat";
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAAH4QwP1AF463ytY1W9nzSxjNIGeZsSl4",
    authDomain: "testfirebase-b84cb.firebaseapp.com",
    projectId: "testfirebase-b84cb",
    storageBucket: "testfirebase-b84cb.appspot.com",
    messagingSenderId: "320379859882",
    appId: "1:320379859882:web:a6400b4cead6caae6231d3"
}

 firebase.initializeApp(firebaseConfig)

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>

    <App />
    </Context.Provider>
 ,
  document.getElementById('root')
);


