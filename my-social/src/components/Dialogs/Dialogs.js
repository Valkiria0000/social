import Dialog from "./Dialog";
import classes from "./Dialog.module.css";
import Message from "./Message";
const Dialogs = (props) => {


  return (
    <div className={classes.content}>
      <ul className={classes.dialogs}>
        <Dialog dialogs={props.dialogs} />
      </ul>
      <ul className={classes.messages}>
        <Message messages={props.messages} />
      </ul>
    </div>
  );
};
export default Dialogs;
