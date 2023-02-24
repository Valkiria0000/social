import { NavLink } from "react-router-dom"

const Usersdialog = (props) => {
  
   let usersDialogs = props.usersDialogs 
    
    return(
        usersDialogs.map(dialog=> <li><NavLink to={`/dialogs/${dialog.id}`}>{dialog.user} </NavLink></li>)
    )
}
export default Usersdialog

