import classes from "./Post.module.css"
const Post = (props) => {
  return (
    <div className={classes.post}>
      <img className={classes.img} src="https://vraki.net/sites/default/files/inline/images/prik-ava-2.jpg" alt="" />
      {props.message}
      <span>likes:{props.like}</span>
    </div>
  );
};
export default Post