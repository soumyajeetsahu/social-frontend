import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { fetchUser } from "./utils/fetchUser";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User = fetchUser();
    if (!User) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
