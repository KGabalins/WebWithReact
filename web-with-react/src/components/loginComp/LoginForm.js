import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";
import { useRef } from "react";

function LoginForm() {
  const navigate = useNavigate()

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  function submitHandler(e) {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    const allUsers = JSON.parse(localStorage.getItem("users"))

    allUsers.forEach(user => {
      if(user.email === enteredEmail && user.password === enteredPassword) {
        localStorage.setItem("currUser", JSON.stringify(user))
        navigate("/", {replace: true})
      }
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.loginContainer}>
        <div className={classes.input}>
          <label>Email</label>
          <input type="email" placeholder="email" ref={emailInputRef} required></input>
        </div>
        <div className={classes.input}>
          <label>Password</label>
          <input type="password" placeholder="password" ref={passwordInputRef} required></input>
        </div>
        <div className={classes.button}>
          <button>Sign in</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
