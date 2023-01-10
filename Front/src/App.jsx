import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
