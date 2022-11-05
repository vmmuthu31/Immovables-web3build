import { CContainer, CForm, CNavbar } from "@coreui/bootstrap-react";

import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import logo from "./logo.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <CNavbar colorScheme="light">
          <CContainer fluid>
            <Nav.Link href="/">
              <h2 className="white">
                <img src={logo} alt="" width={150} height={200} />
                Immovables
              </h2>
            </Nav.Link>
            <CForm className="d-flex ">
              <Nav.Link href="/property">
                {" "}
                <h6 className="pr-3">Buy/Sell Property</h6>
              </Nav.Link>
              <Nav.Link href="/About">
                <h6 className="pr-3">About</h6>
              </Nav.Link>
              <Nav.Link>
                <h6>
                  Your Wallet: <span id="account">{this.props.account}</span>
                </h6>
              </Nav.Link>
            </CForm>
          </CContainer>
        </CNavbar>
      </>
    );
  }
}

export default Navbar;
