import Menu from "./Menu";
import  "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <Menu menu = {props.menu}/>
      
      </ul>
    </nav>
  );
};

export default Navbar;
