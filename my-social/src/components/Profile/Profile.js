import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
const Profile = (props) => {
  return (
    <>
      <div className={classes.image}></div>
      <ProfileInfo />
      <hr />

      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </>
  );
};

export default Profile;
