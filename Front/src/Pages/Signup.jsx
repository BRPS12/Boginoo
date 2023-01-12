import "../Styles/LoginAndSignup.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const signUp = async () => {
    try {
      const res = await instance.post("/users/signup", {
        name: name,
        password: password,
        email: email,
      });
      toast.success("Amjilttai burtguullee");
    } catch (error) {
      toast.error("Burtgeltei email baina");
    }
  };

  return (
    <div className="loginContainer">
      <ToastContainer />
      <header>
        <br />
        <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
      </header>
      <main>
        <div className="loginBox">
          <img src={require("../images/logo.png")} className="logo" />
          <p className="boginooP">Бүртгүүлэх</p>
          <div className="boxThree">
            <label htmlFor="email" className="labels">
              Username
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="boxThree">
            <label htmlFor="email" className="labels">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              Password
            </label>
            <input
              type="text"
              name="pass"
              className="inps"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="clickGreen" onClick={signUp}>
            Бүртгүүлэх
          </button>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default Signup;
