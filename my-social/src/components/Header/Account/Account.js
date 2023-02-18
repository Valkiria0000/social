import SignIn from "./SignIn"
import SignUp from "./SignUp"
import classes from "./Account.module.css"
const Account = ()=> {
    return(
        <div className={classes.text}>
            <SignIn/>/
            <SignUp/>
        </div>
    )
}

export default Account