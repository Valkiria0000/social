import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';

  
export let renderEntrireTree = (state)=> {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App state={state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
    
);
}