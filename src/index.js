import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
  posts: [
    { id: 1, message: "Hi my name Ihor", likesCount: 5 },
    { id: 2, message: "Im, profesional coder", likesCount: 14 },
    { id: 3, message: "Hello Bro", likesCount: 52 }
  ],
   dialogs: [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" }
  ],
   messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Hi bro" },
    { id: 4, message: "What your doing" },
    { id: 5, message: "Brooo" },
    { id: 6, message: "Waid a minute" }
  ]
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
