import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Domain from "./Automobile";
import { Switch } from 'react-router-dom';

import { BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container" style={{ fontFamily: "Arial, sans-serif" }}>
        <Navbar />
      </div>
        <div className="App">
      <Domain/>
        </div>

      <Footer />
    </div>
  );
}

export default App;