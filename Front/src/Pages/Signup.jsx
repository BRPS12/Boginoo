import "../Styles/LoginAndSignup.css";
import axios from "axios";
import { useState } from "react"

const Signup = () => {
  const [name , setName] = useState()
  const [password , setPassword] = useState()
  const instance = axios.create({
    baseURL: "http://localhost:4200/users/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const signUp = async () => {
    try {
      const res = await instance.post("/signup" , {
       name : name,
       password : password
      })
      console.log(res)
    } catch (error) {
      console.log(error.message)
    }
  }
  

  return (
    <div className="loginContainer">
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
              Цахим хаяг
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              Нууц үг
            </label>
            <input
              type="text"
              name="pass"
              className="inps"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              Нууц үгээ давтна уу?
            </label>
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
