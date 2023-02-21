import { NavLink } from "react-router-dom"

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <li ><NavLink to={path}>{props.name}</NavLink></li>
    )
}
export default Dialog

