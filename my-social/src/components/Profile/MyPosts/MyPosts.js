import Post from "./Post/Post";
import classes from './MyPosts.module.css'
const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h2>Мои посты</h2>
        <div>
            Создать пост
            <textarea></textarea>
            <button>Добавить пост</button>
            <button>Удалить пост</button>
        </div>
        <div>
            <Post/>
        </div>
    </div>
  );
};

export default MyPosts;
