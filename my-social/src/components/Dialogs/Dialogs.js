import UsersDialog from "./UsersDialog";
import classes from "./UsersDialog.module.css";
import Message from "./Message";
const Dialogs = (props) => {


  return (
    <div className={classes.content}>
      <ul className={classes.usersDialog}>
        
          <UsersDialog usersDialogs={props.usersDialogs} />
 
      </ul>
      <ul className={classes.messages}>
        <Message messages={props.messages} />
      </ul>
    </div>
  );
};
export default Dialogs;
