import "./App.css";
import React, { useState } from "react";
import Output from "./Output";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Input.js";
import Image from "react-bootstrap/Image";
import background from "./background.jpg";
import Logo from "./Components/Logo.js";

function App() {
  const queryString = require("query-string");
  const [isOutput, setOutput] = useState(false); //TODO: set this on clicking search
  const [searchInfo, setInfo] = useState([{}])
  const [searchResult, setResult] = useState([{}])
  //TODO: search info from Input component
  
  const handleSubmit = (searchInfo)=>{
    //modify searchInfo here
    setInfo(searchInfo);
    var tags = queryString.stringify({tags:searchInfo.tags});
    console.log(tags);
    fetch(`/search?${tags}`).then(
      response => response.json()
    ).then(data => {
      setResult(data);
      setOutput(true);
    })
  }
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="header">
        <h1>QUOLESOME-NESS</h1>
        <Logo />
        <p>Feeling down? Let's find you some wholesome quotes!</p>
      </div>
      {isOutput ? (
        <Output
          searchInfo={searchInfo}
          searchResult={searchResult}
          handleBack={() => setOutput(false)}
        />
      ) : (
        <Input handleSubmit={handleSubmit} />
      )}
      <div className="footer">
        <p>
          Created by: Amber Zheng, Anya Ji, Eunice Zhang, Kai Zou, Vrushali
          Samant{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
