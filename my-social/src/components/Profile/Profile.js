import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <>
      <div className={classes.image}></div>
      <ProfileInfo/>
      <hr />
      <MyPosts />
    </>
  );
};

export default Profile;
