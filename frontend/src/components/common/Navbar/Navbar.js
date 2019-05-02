import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Doctors Application
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto" />
            <span class="navbar-text">Submitted by Arman Pathan</span>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
