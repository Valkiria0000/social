import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import Button from "../../UI/Button";


  const MyPosts = (props) => {
  
    
  return (
    <div className={classes.posts}>
      <h2>Мои посты</h2>
                 
            <input className={classes.input}placeholder="Создать"></input>
            <Button>Добавить</Button>
            <Button>Удалить</Button>
       
        <div>
            <Post posts={props.posts} />
        </div>
    </div>
  );
};

export default MyPosts;
