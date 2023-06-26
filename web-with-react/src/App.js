import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import YourMoviesPage from "./components/pages/YourMoviesPage";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/yourMovies" element={<YourMoviesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
