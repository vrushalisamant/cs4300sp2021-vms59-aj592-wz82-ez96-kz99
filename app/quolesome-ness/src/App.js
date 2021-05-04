import "./App.css";
import React, { useState } from "react";
import Output from "./Output";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./input.js";
import background from "./background.jpg";
import Logo from "./Components/Logo.js";
import Button from "react-bootstrap/Button";
import Loader from "react-loader-spinner";

function App() {
  const queryString = require("query-string");
  const [isOutput, setOutput] = useState(false);
  const [searchInfo, setInfo] = useState([{}]);
  const [searchResult, setResult] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (searchInfo) => {
    //modify searchInfo here
    setInfo(searchInfo);
    setLoading(true);

    //SVD
    var query = queryString.stringify({ text: searchInfo.text });
    console.log(query);
    var tags = queryString.stringify({ tags: searchInfo.tags });
    console.log(tags);
    fetch(`/search?${query}&${tags}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setResult(data);
        /*[{quote: string, 
        author: string, 
        tags: [string], 
        likes: number, 
        Similarity: number,
        DocIdx: number}]*/
        setOutput(true);
      });
  };

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
      <a href="https://quolesome-ness.herokuapp.com">
        <Button variant="outline-light" className="button version">
          Prototype 1
        </Button>
      </a>

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
        <div>
          {loading ? (
            <Loader
              className="loader"
              type="ThreeDots"
              color="#2fd5eb"
              height={200}
              width={200}
            />
          ) : (
            <></>
          )}
          <Input handleSubmit={handleSubmit} />
        </div>
      )}
      <div className="footer">
        <p>
          Created by: Amber Zheng, Anya Ji, Eunice Zhang, Kai Zou, Vrushali
          Samant
        </p>
      </div>
    </div>
  );
}

export default App;
