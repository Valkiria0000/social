import { NavLink } from "react-router-dom";
import  "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li >
          <NavLink to="/profile" >
          <img src="img/icon/user.svg" alt=""/>
          Профиль</NavLink>
        </li>
        <li >
        <NavLink to="/dialogs" >
          <img src="img/icon/message.svg" alt="" />
          Сообщения</NavLink>
        </li>
        <li >
          <NavLink to="/news">
          <img src="img/icon/news.svg" alt="" />
          Новости</NavLink>
        </li>
        <li >
          <NavLink to="/music">
          <img src="img/icon/music.svg" alt="" />
          Музыка</NavLink>
        </li>
        <li >
         <NavLink to="/settings"> <img src="img/icon/setting.svg" alt="" />
          Настройки</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
