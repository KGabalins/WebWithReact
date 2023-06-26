export function RegisterHandler(userData) {
  let isValid = true

  const nameError = document.getElementById("nameError")
  const surnameError = document.getElementById("surnameError")
  const emailError = document.getElementById("emailError")
  const passwordError = document.getElementById("passwordError")
  const repasswordError = document.getElementById("repasswordError")


  if (userData.name.length < 2) {
    isValid = false
    nameError.style.display = "inline-block"
  } else {
    nameError.style.display = "none"
  } 
  
  if (userData.surname.length > 0 && userData.surname.length < 2){
    isValid = false
    surnameError.style.display = "inline-block"
  } else {
    surnameError.style.display = "none"
  }  

  if (userData.email !== userData.reemail){
    isValid = false
    emailError.style.display = "inline-block"
  } else {
    emailError.style.display = "none"
  }
  
  if (userData.password.length < 8) {
    isValid = false
    passwordError.style.display = "inline-block"
  } else {
    passwordError.style.display = "none"
  } 

  if (userData.password !== userData.repassword) {
    isValid = false
    repasswordError.style.display = "inline-block"
  } else {
    repasswordError.style.display = "none"
  }

  return isValid
}