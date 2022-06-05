import React from "react";
import Svg from "../../Component/Svg/Svg";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-info">
        <div className="about-header">
          Our Partners
        </div>
        <div className="description">
          On our mission to build the home for crypto natives, we have the best
          networks as our partners. Flint currently supports Ethereum, Solana,
          Tron, and Binance Smart Chain with additional networks on the way.
        </div>
      </div>
      <div className="about-imges">
        {/* create svg image */}
        <div className="lf-player-container">
          <div id="firstLottie" className="lottie-player">
           <Svg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
