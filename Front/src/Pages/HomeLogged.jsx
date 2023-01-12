import { instance } from "../App";
import "../Styles/Home.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const HomeLogged = () => {
  const { id } = useParams();
  console.log(id);
  const [link, setLink] = useState();
  const [data, setData] = useState([]);
  const [name, setName] = useState();

  const getUser = async () => {
    const res = await instance.get(`/users/${id}`);
    setName(res.data.data.name);
    console.log(res);
  };

  const shortId = async () => {
    try {
      const res = await instance.post("/links/createlink", {
        link: link,
      });
      setData(res.data.data.url.shortId);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="homeContainer">
      <header>
        <br />
        <div className="headerRight">{name}</div>
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
          <p>Өгөгдсөн холбоос:</p>

          <span>{link}</span>
          <p>Богино холбоос:</p>
          <span style={{ color: "purple", fontSize: 20 }}>
            localhost:3000/{data}
          </span>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default HomeLogged;
