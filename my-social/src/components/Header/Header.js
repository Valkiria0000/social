
import Account from "./Account/Account";
import classes from "./Header.module.css";
import Search from "./Search/Search";



    const Header = () => {
    return (
        <header className={classes.header}>
            <img width={"50px"} src="img/logo.jpg"/>
            <Search/>
            <Account/>
        
    
        </header>
    )
 
    }
 export default Header