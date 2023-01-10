import "../Styles/LoginAndSignup.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginContainer">
      <header>
        <br />
        <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
      </header>
      <main>
        <div className="loginBox">
          <img src={require("../images/logo.png")} className="logo" />
          <p className="boginooP">Нэвтрэх</p>
          <div className="boxThree">
            <label htmlFor="email" className="labels">
              Цахим хаяг
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="name@mail.domain"
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
            />
          </div>
          <div className="boxTwo">
            <div>
              <input type="checkbox" name="check" className="checkBox" />
              <label htmlFor="check" className="checkLabel">Намайг сана</label>
            </div>
            <Link to={"/forgot"} className="linkStyle">Нууц үгээ мартсан</Link>
          </div>
          <button type="submit" className="clickGreen">Нэвтрэх</button>
          <Link to={"/signUp"} className="newUser">Шинэ хэрэглэгч бол энд дарна уу?</Link>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default Login;
