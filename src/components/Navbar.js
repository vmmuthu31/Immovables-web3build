import React, { Component } from "react";
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar  fixed-top  flex-md-nowrap p-0 shadow">
        <h1 className="pinkme navbar-brand col-sm-3 col-md-2 mr-0 pt-3 pb-3">
          Immovables
        </h1>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            Services
          </li>

          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">
              Your Wallet: <span id="account">{this.props.account}</span>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
