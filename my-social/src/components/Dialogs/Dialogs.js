import classes from "./Dialog.module.css";
const Dialogs = () => {
  return (
    <div className={classes.content}>
      <ul className={classes.dialogs}>
        <li >Дима</li>
        <li >маша</li>
        <li >аня</li>
        <li >ян</li>
        <li >света</li>
      </ul>
      <ul className={classes.messages}>
        
        <li >hello</li>
        <li >noe</li>
        <li >1123</li>
        <li >fyulfu</li>
        <li >ui</li>
      </ul>
    </div>
  );
};
export default Dialogs;
