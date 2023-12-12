import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, sendMessage, updateNewPostText } from './redux/State';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Перерисовуем все дерево
export let rerenderEntireTree = (state) => {

    root.render(

        <React.StrictMode>
            <BrowserRouter>
                <App state={state} 
                     addPost={addPost} 
                     sendMessage={sendMessage}
                     updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}



