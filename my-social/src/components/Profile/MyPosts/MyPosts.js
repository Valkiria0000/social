import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";
import { addPostCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
