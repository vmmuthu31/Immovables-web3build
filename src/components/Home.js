import React from "react";
import "./App.css";
import slide from "../components/Slide.png";

function Home() {
  return (
    <div>
      <div className="d-flex mt-2 ml-4 justify-content-center text-align-center align-items-center">
        <div class="row">
          <div class="col-lg-6 mt-3  justify-content-center text-align-center align-items-center">
            <h1 className="head">
              Discover the greatest <br />{" "}
              <span className="pinkme">Real Estate</span> in your <br /> nation
            </h1>
            <p className="pt-1 msg">
              Immovables is an online real estate marketplace where you can
              purchase and sell homes using your metamask Wallet.
            </p>

            <form action="./property">
              <button type="submit" className="btn justify-content-center mt-">
                Let's Dive in
              </button>
            </form>
          </div>
          <div class="col-lg-6">
            <img src={slide} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
