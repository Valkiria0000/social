import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {

  let newPost = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
    
   
  };
  return (
    <div className={classes.posts}>
      <h2>Мои посты</h2>

      <input
        className={classes.input}
        placeholder="Создать"
        ref={newPost}
        onChange={onPostChange}
        value={props.newPostText}
      ></input>
      <button onClick={addPost}>Добавить</button>
      <button>Удалить</button>

      <div>
        <Post posts={props.posts} />
      </div>
    </div>
  );
};

export default MyPosts;
