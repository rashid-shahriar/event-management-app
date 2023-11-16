import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./global/Navbar";
import History from "./pages/History";
import SignIn from "./account/SignIn";
import SignUp from "./account/SignUp";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
