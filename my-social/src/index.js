import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


let posts = [
    { id: 1, post: "Hi, how are you?", likes:"2", src: "https://vraki.net/sites/default/files/inline/images/prik-ava-2.jpg" },
    { id: 2, post: "Hello, I'am fine", likes:"500", src: "https://fikiwiki.com/uploads/posts/2022-02/1645000472_12-fikiwiki-com-p-kartinki-krasivie-na-telefon-zhivie-oboi-13.jpg" },
    { id: 3, post: "Hello, friends" , likes:"9", src: "https://get.wallhere.com/photo/5092x3438-px-animals-leopard-1098679.jpg"},
    
  ];
    
  let dialogs = [
    { id: 1, name: "Саша" },
    { id: 2, name: "Ира" },
    { id: 3, name: "Лёня" },
    { id: 4, name: "Наташа" },
    { id: 5, name: "Дюша" },
    { id: 6, name: "Кот" },
  ];

  let messages = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Хорошо" },
    { id: 4, message: "Нормально" },
    { id: 5, message: "нет" },
    { id: 6, message: "да" },
  ];

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App posts={posts} dialogs={dialogs} messages={messages} />

);


