import { useNavigate } from "react-router-dom";
import { RegisterHandler } from "./ErrorHandler";
import classes from "./LoginPage.module.css";
import { useRef } from "react"

function RegisterForm(props) {
  const navigate = useNavigate()

  const nameInputRef = useRef()
  const surnameInputRef = useRef()
  const emailInputRef = useRef()
  const reemailInputRef = useRef()
  const passwordInputRef = useRef()
  const repasswordInputRef = useRef()

  function submitHandler(e) {
    e.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredSurname = surnameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredReemail = reemailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const enteredRepassword = repasswordInputRef.current.value

    console.log(enteredName, enteredSurname, enteredEmail, enteredReemail, enteredPassword, enteredRepassword)
  
    const userData = {
      name: enteredName,
      surname: enteredSurname,
      email: enteredEmail,
      reemail: enteredReemail,
      password: enteredPassword,
      repassword: enteredRepassword,

    }

    const allUsers = JSON.parse(localStorage.getItem("users")) || []

    if(RegisterHandler(userData)) {
      const user = {
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        password: userData.password
      }
      allUsers.push(user)
      localStorage.setItem("users", JSON.stringify(allUsers))
      localStorage.setItem("currUser", JSON.stringify(user))
      navigate("/", {replace: true})
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.loginContainer}>
        <div className={classes.input}>
          <label>Name</label>
          <input type="text" placeholder="name" id="name" ref={nameInputRef} required></input>
          <p id="nameError" className={classes.error}>This input field should contain atleast 2 characters</p>
        </div>
        <div className={classes.input}>
          <label>Surname</label>
          <input type="text" placeholder="surname" id="surname" ref={surnameInputRef}></input>
          <p id="surnameError" className={classes.error}>This input field should be empty or contain atleast 2 characters</p>
        </div>
        <div className={classes.input}>
          <label>Email</label>
          <input type="email" placeholder="email" id="email" ref={emailInputRef} required></input>
          <p id="emailError" className={classes.error}>Both emails should match!</p>
        </div>
        <div className={classes.input}>
          <label>Email again</label>
          <input type="email" placeholder="email" id="reemail" ref={reemailInputRef} required></input>
        </div>
        <div className={classes.input}>
          <label>Password</label>
          <input type="password" placeholder="password" id="password" ref={passwordInputRef} required></input>
          <p id="passwordError" className={classes.error}>Password should be atleast 8 characters long</p>
        </div>
        <div className={classes.input}>
          <label>Password again</label>
          <input type="password" placeholder="password" id="repassword" ref={repasswordInputRef} required></input>
          <p id="repasswordError" className={classes.error}>The passwords doesn't match</p>
        </div>
        <div className={classes.button}>
          <button>Sign up</button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
