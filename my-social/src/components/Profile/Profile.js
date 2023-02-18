import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <main className={classes.profile}>
      <div className={classes.image}></div>
      <div className={classes.user}>
        <div className={classes.ava}>
            <img src="https://coolsen.ru/wp-content/uploads/2021/06/138-8.jpg"/>
        </div>
        <h1>Дюшес Иванов</h1>
      </div>
      <div className={classes.info}>
        <div className={classes.item}>
          <p>Город:</p>
          <p>Статус:</p>
          <p>Рейтинг:</p>
        </div>
        <div className={classes.item}>
          <p>Майами</p>
          <p>Продавец</p>
          <p>5/5</p>
        </div>
      </div>
      <hr />
      <MyPosts />
    </main>
  );
};

export default Profile;
