import Dialog from "./Dialog";
import classes from "./Dialog.module.css";
import Message from "./Message";
const Dialogs = () => {
  return (
    <div className={classes.content}>
      <ul className={classes.dialogs}>
        <Dialog name="Дима" id="1" />
        <Dialog name="аня" id="2" />
        <Dialog name="маня" id="3" />
        <Dialog name="ваня" id="4" />
      </ul>
      <ul className={classes.messages}>
        <Message message="Hi"/>
        <Message message="yti"/>
        <Message message="hey"/>
      </ul>
    </div>
  );
};
export default Dialogs;
