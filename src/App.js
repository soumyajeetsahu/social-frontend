import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login/>}></Route>
      <Route path="/*" element={<Home/>}></Route>
    </Routes>
    )
}

export default App;
