import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
const Profile = (props) => {

  return (
    <>
      <div className={classes.image}></div>
      <ProfileInfo/>
      <hr />
     
      <MyPosts posts={props.posts} />
    </>
  );
};

export default Profile;
