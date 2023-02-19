import Post from "./Post/Post";
import classes from './MyPosts.module.css'
const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h2>Мои посты</h2>
                 
            <input className={classes.input}placeholder="Создать"></input>
            <button>Добавить</button>
            <button>Удалить</button>
       
        <div>
            <Post message="Hi, how are you?" like="5"/>
            <Post message="Hello, I'am fine" like="20"/>
        </div>
    </div>
  );
};

export default MyPosts;
