import {
  CContainer,
  CForm,
  CNavbar,
  CNavbarBrand,
} from "@coreui/bootstrap-react";
import React, { Component } from "react";
import logo from "./logo.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <CNavbar colorScheme="light">
          <CContainer fluid>
            <h2 className="white">
              <img src={logo} alt="" width={150} height={200} />
              Immovables
            </h2>
            <CForm className="d-flex ">
              <h6 className="pr-3">Buy/Sell Property</h6>
              <h6 className="pr-3">About</h6>
              <h6>
                Your Wallet: <span id="account">{this.props.account}</span>
              </h6>
            </CForm>
          </CContainer>
        </CNavbar>
      </>
    );
  }
}

export default Navbar;
