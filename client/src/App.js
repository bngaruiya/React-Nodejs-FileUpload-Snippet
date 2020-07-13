import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Uploads from "./components/uploads/uploads";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to CDPA</h1>
      </header>
      <Uploads />
    </div>
  );
}

export default App;
