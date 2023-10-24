import React from "react";
import logo from "./logo1.png";
const Navbar = () => {
  
  return (
    <header className="bg-white pt-4 row" style={{}}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
        <img src={logo} height="50" href="./Domain" className="mb-3" alt="Logo" />
          </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
  <a className="nav-link text-black text-lg" href="/" style={{ fontSize: "20px" }}>
    Home 
  </a>
</li>
          <li class="nav-item active">
  <a className="nav-link text-black text-lg" href="/contact" style={{ fontSize: "20px" }}>
    Contact
  </a>
</li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;