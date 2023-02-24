let state = {

    profile: {
        posts: [
    { id: 1, post: "Hi, how are you?", likes:"2", src: "https://vraki.net/sites/default/files/inline/images/prik-ava-2.jpg" },
    { id: 2, post: "Hello, I'am fine", likes:"500", src: "https://fikiwiki.com/uploads/posts/2022-02/1645000472_12-fikiwiki-com-p-kartinki-krasivie-na-telefon-zhivie-oboi-13.jpg" },
    { id: 3, post: "Hello, friends" , likes:"9", src: "https://get.wallhere.com/photo/5092x3438-px-animals-leopard-1098679.jpg"},
    
  ],
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

export default state