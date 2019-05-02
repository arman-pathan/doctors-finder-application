import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
