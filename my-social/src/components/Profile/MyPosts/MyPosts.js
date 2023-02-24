import Post from "./Post/Post";
import classes from './MyPosts.module.css'


  const MyPosts = () => {
  
    let MyPostsData = [
      { id: 1, post: "Hi, how are you?", likes:"2", src: "https://vraki.net/sites/default/files/inline/images/prik-ava-2.jpg" },
      { id: 2, post: "Hello, I'am fine", likes:"500", src: "https://fikiwiki.com/uploads/posts/2022-02/1645000472_12-fikiwiki-com-p-kartinki-krasivie-na-telefon-zhivie-oboi-13.jpg" },
      { id: 3, post: "Hello, friends" , likes:"9", src: "https://get.wallhere.com/photo/5092x3438-px-animals-leopard-1098679.jpg"},
      
    ];
  
  return (
    <div className={classes.posts}>
      <h2>Мои посты</h2>
                 
            <input className={classes.input}placeholder="Создать"></input>
            <button>Добавить</button>
            <button>Удалить</button>
       
        <div>
            <Post data={MyPostsData} />
        </div>
    </div>
  );
};

export default MyPosts;
