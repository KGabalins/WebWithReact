import { Navigate } from "react-router-dom"

function PrivateRoute(props){
  const isLoggedIn = localStorage.getItem("currUser")

  return isLoggedIn ? props.children : <Navigate to="/login" />
}

export function IsLoggedIn(props) {
  const isLoggedIn = localStorage.getItem("currUser")

  return isLoggedIn ? <Navigate to="/" /> : props.children
}

export default PrivateRoute