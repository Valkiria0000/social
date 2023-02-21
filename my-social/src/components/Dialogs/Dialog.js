import { NavLink } from "react-router-dom"

const Dialog = (props) => {
   let data = props.data

  
   
    return(
        data.map(dialog=> <li><NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink></li>)
    )
}
export default Dialog

