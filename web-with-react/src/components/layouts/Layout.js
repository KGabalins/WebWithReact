import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <>
      <h1 className="page-title">Movie rental</h1>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
