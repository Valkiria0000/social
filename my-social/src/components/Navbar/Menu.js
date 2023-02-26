import { NavLink } from "react-router-dom";

const Menu = (props) => {
  let menu = props.menu;
  return menu.map((menulink) => (
    <li>
      <NavLink to={menulink.to}>
        <img src={menulink.img} alt="" />
        {menulink.page}
      </NavLink>
    </li>
  ));
};

export default Menu;
