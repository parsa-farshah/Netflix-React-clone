import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import Account from "./pages/account/Account";
import LogIn from "./pages/logIn/LogIn";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
