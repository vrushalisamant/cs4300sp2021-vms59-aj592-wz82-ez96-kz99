import "./App.css";
import React from "react";
import Output from "./Output";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './input.js';

function App() {
  return (
    <div className="App">
      <Output />

      <Input />
    </div>
  );
}

export default App;
