import Post from "./Post/Post";
import classes from './MyPosts.module.css'


  const MyPosts = (props) => {
  
    
  return (
    <div className={classes.posts}>
      <h2>Мои посты</h2>
                 
            <input className={classes.input}placeholder="Создать"></input>
            <button>Добавить</button>
            <button>Удалить</button>
       
        <div>
            <Post posts={props.posts} />
        </div>
    </div>
  );
};

export default MyPosts;
