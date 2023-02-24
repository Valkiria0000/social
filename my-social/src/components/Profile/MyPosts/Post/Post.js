import classes from "./Post.module.css"
const Post = (props) => {
  let data = props.data
  return (
    data.map(post=> <div className={classes.post}><img className={classes.img} src={post.src} alt="" />{post.post} 
    <span>likes: {post.likes}</span></div>)
  );
};
export default Post