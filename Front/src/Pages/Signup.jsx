import "../Styles/LoginAndSignup.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const signUp = async () => {
    try {
      const res = await instance.post("/users/signup", {
        name: name,
        password: password,
        email: email,
        role: role,
      });
      console.log(res);
      toast.success("Amjilttai burtguullee");
    } catch (error) {
      toast.error("Burtgeltei email baina");
    }
  };

  return (
    <div className="loginContainer" style={{ backgroundColor: "black" }}>
      <ToastContainer />
      <header>
        <br />
        <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
      </header>
      <main>
        <div className="loginBox">
          <img src={require("../images/logo.png")} alt="" className="logo" />
          <p className="boginooP">Бүртгүүлэх</p>
          <div className="boxThree">
            <label htmlFor="email" className="labels">
              <p style={{ color: "white" }}>Username</p>
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
              <p style={{ color: "white" }}>Email </p>
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
            <label htmlFor="email" className="labels">
              <p style={{ color: "white" }}>Role </p>
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              <p style={{ color: "white" }}>Password</p>
            </label>
            <input
              type="text"
              name="pass"
              className="inps"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="boginooButton hemjee"
            onClick={signUp}
          >
            Бүртгүүлэх
          </button>
          <Link className="boginooButton gyHemjee" to="/login">
            Нэвтрэх
          </Link>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Signup;
