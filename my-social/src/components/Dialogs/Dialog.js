import { NavLink } from "react-router-dom"

const Dialog = (props) => {
   let dialogs = props.dialogs
    return(
        dialogs.map(dialog=> <li><NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink></li>)
    )
}
export default Dialog

