import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/global/Navbar";
import History from "./pages/History/History";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import AdminHome from "./pages/admin/AdminHome";
import AdminSignIn from "./pages/admin/AdminPost";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/login"
          element={!user ? <LogIn /> : <Navigate to="/" />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/signin" element={<AdminSignIn />} />
      </Routes>
    </>
  );
}

export default App;
