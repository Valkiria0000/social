
import classes from "./ProfileInfo.module.css"

const ProfileInfo =()=> {
    return(
        <>
        <div className={classes.user}>
        <div className={classes.ava}>
            <img src="https://coolsen.ru/wp-content/uploads/2021/06/138-8.jpg" alt=""/>
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
    </>
    )
}

export default ProfileInfo