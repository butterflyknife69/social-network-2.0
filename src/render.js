import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, sendMessage } from './redux/State';




// Перерисовуем все дерево
export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <React.StrictMode>
            <BrowserRouter>
                <App state={state} 
                     addPost={addPost} 
                     sendMessage={sendMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}



