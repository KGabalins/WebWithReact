import MainNavigation from "./MainNavigation"

let isLoggedIn = true

function Layout(props) {
  return(
    <div>
      <h1 className="page-title">Movie rental</h1>
      {isLoggedIn && <MainNavigation />}
      <main>{props.children}</main>
    </div>
  )
}

export default Layout