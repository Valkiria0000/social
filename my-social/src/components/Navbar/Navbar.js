import classes from "./Navbar.module.css";
    const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.menu}>
                <li>Профиль</li>
                <li>Сообщения</li>
                <li>Новости</li>
                <li>Музыка</li>
                <li>Настройки</li>
            </ul>
        </nav>
    )
    }

 export default Navbar;