import { renderEntrireTree } from "../render"

let state = {

    profile: {
        posts: [
    { id: 1, post: "Hi, how are you?", likes:"2" },
    { id: 2, post: "Hello, I'am fine", likes:"500" },
    { id: 3, post: "Hello, friends" , likes:"9"},
    
  ],
        newPostText: 'ira'
    },
    
    dialogs: {
         
  usersDialogs: [
    { id: 1, user: "Саша" },
    { id: 2, user: "Ира" },
    { id: 3, user: "Лёня" },
    { id: 4, user: "Наташа" },
    { id: 5, user: "Дюша" },
    { id: 6, user: "Кот" },
  ],

   messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Хорошо" },
    { id: 4, message: "Нормально" },
    { id: 5, message: "нет" },
    { id: 6, message: "да" },
  ],
    },
    navbar: {
         
        menu: [
          { id: 1, page: "Профиль", to: "/profile", img:"img/icon/user.svg" },
          { id: 2, page: "Сообщения", to: "/dialogs", img:"img/icon/message.svg" },
          { id: 3, page: "Новости", to: "/news", img:"img/icon/news.svg" },
          { id: 4, page: "Музыка", to: "/music", img:"img/icon/music.svg" },
          { id: 5, page: "Настройки", to: "/settings", img:"img/icon/setting.svg" },
         
        ],
      
          },
}


export let addPost =(postMessage)=> {
  let newPost = {
    id:5,
    post: postMessage,
    likes: 0
  }
  state.profile.posts.push(newPost)
  renderEntrireTree(state)

}

export let updateNewPostText =(newText)=> {
 
  state.profile.newPostText = newText;
  renderEntrireTree(state)

}
export default state