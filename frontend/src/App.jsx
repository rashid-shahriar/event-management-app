import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/global/Navbar";
import History from "./pages/History/History";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import AdminHome from "./pages/admin/AdminHome";
import AdminSignIn from "./pages/admin/AdminPost";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/signin" element={<AdminSignIn />} />
      </Routes>
    </>
  );
}

export default App;
