import "./App.css";
import React, { useState } from "react";
import Output from "./Output";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

function App() {
  const [isOutput, setOutput] = useState(true); //TODO: set this on clicking search
  
  //TODO: search info
  const searchInfo = {
    text: "oof",
    categories: ["life", "sad"],
    emoji: '😢'
  };

  const content = isOutput ? <Output searchInfo={searchInfo} /> : <></>; //TODO: input page
  return (
    <div className="App">
      <Image src="logo192.png" roundedCircle />
      <h1>QUOLESOME-NESS</h1>
      {content}
    </div>
  );
}

export default App;
