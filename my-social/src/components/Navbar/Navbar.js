import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.menu}>
        <li>
          <NavLink to="/profile">
          <img src="img/icon/user.svg" />
          Профиль</NavLink>
        </li>
        <li>
        <NavLink to="/dialogs">
          <img src="img/icon/message.svg" />
          Сообщения</NavLink>
        </li>
        <li>
          <NavLink to="/news">
          <img src="img/icon/news.svg" />
          Новости</NavLink>
        </li>
        <li>
          <NavLink to="/music">
          <img src="img/icon/music.svg" />
          Музыка</NavLink>
        </li>
        <li>
         <NavLink to="/settings"> <img src="img/icon/setting.svg" />
          Настройки</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
