import "../Styles/LoginAndSignup.css";

const Signup = () => {
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
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              Нууц үгээ давтна уу?
            </label>
            <input
              type="text"
              name="pass"
              className="inps"
              placeholder="••••••••••"
            />
          </div>
          <button type="submit" className="clickGreen">
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
