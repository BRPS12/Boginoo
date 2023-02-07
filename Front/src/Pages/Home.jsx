import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { instance } from "../App";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [link, setLink] = useState();
  const [data, setData] = useState([]);
  const shortId = async () => {
    try {
      const res = await instance.post("/links/createlink", {
        link: link,
      });
      setData(res.data.data.url.shortId);
    } catch (error) {
      toast.error("Нэвтэр нь үү");
    }
  };
  return (
    <div className="homeContainer" style={{ backgroundColor: "black" }}>
      <header>
        <ToastContainer />
        <br />
        <div className="headerRight">
          <div>
            <span style={{ color: "#02B589" }}>Хэрхэн ажилладаг вэ?</span>
          </div>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <button className="boginooButton">Нэвтрэх</button>
          </Link>
        </div>
      </header>
      <main>
        <img src={require("../images/boginooLogo.png")} alt="" />
        <div className="box">
          <input
            placeholder="https://www.web-huudas.mn"
            type="text"
            id="boginooInp"
            onChange={(e) => setLink(e.target.value)}
          />
          <button onClick={shortId} className="boginooButton">
            Богиносгох
          </button>
        </div>
        <div>
          <p style={{ color: "white" }}>Өгөгдсөн холбоос:</p>

          <span style={{ color: "blue" }}>{link}</span>
          <p style={{ color: "white" }}>Богино холбоос:</p>
          <span style={{ color: "purple", fontSize: 20 }}>
            localhost:3000/{data}
          </span>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
