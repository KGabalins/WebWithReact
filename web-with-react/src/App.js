import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import YourMoviesPage from "./components/pages/YourMoviesPage";
import Layout from "./components/layouts/Layout";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { IsLoggedIn } from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <IsLoggedIn>
              <LoginPage />{" "}
            </IsLoggedIn>
          }
        />
      </Routes>

      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/yourMovies"
            element={
              <PrivateRoute>
                <YourMoviesPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
