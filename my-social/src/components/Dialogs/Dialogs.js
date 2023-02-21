import Dialog from "./Dialog";
import classes from "./Dialog.module.css";
import Message from "./Message";
const Dialogs = (props) => {
  
  let dialogsData = [
    { id: 1, name: "Саша" },
    { id: 2, name: "Ира" },
    { id: 3, name: "Лёня" },
    { id: 4, name: "Наташа" },
    { id: 5, name: "Дюша" },
    { id: 6, name: "Кот" },
  ];

  let messageData = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Хорошо" },
    { id: 4, message: "Нормально" },
    { id: 5, message: "нет" },
    { id: 6, message: "да" },
  ];


  return (
    <div className={classes.content}>
      <ul className={classes.dialogs}>
        <Dialog data={dialogsData} />
      </ul>
      <ul className={classes.messages}>
        <Message data={messageData} />
      </ul>
    </div>
  );
};
export default Dialogs;
