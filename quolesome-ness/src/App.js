import "./App.css";
import React, { useState } from "react";
import Output from "./Output";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Input.js';
import Image from "react-bootstrap/Image";
import background from "./background.jpg";
import Logo from "./Components/Logo.js"

function App() {
  const [isOutput, setOutput] = useState(true); //TODO: set this on clicking search
  
  //TODO: search info
  const searchInfo = {
    text: "oof",
    categories: ["life", "sad"],
    emoji: '😢'
  };

  const content = isOutput ? <Output searchInfo={searchInfo} /> : <Input />; //TODO: input page
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, 
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat'}}>
      <div className="header">
        <h1>QUOLESOME-NESS</h1>
        <Logo />
        <p>Feeling down? Let's find you some wholesome quotes!</p>
      </div>
      {content}
      <div className="footer">
        <p>Created by: Amber Zheng, Anya Ji, Eunice Zhang, Kai Zou, Vrushali Samant </p>
      </div>
    </div>
  );
}

export default App;
