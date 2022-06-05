import React from "react";
import Card from "../../Component/Card/Card";
import StickyWrapper from "../../Component/StickyWrapper/StickyWrapper";
import { cardData } from "../../mockup-data/data";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <div className="first">
            <span className="img-conatiner">
              <img
                className="float-img"
                src={
                  "https://www.flint.money/_next/image?url=%2Fhero-assets%2Ftether.png&w=3840&q=75"
                }
              />
            </span>
          </div>
          <div className="second">
            <span className="img-conatiner">
              <img
                className="float-img"
                src={
                  "https://www.flint.money/_next/image?url=%2Fhero-assets%2Fusdc.png&w=3840&q=75"
                }
              />
            </span>
          </div>
          <div className="third">
            <span className="img-conatiner">
              <img
                className="float-img"
                src={
                  "https://www.flint.money/_next/image?url=%2Fhero-assets%2Feth.png&w=3840&q=75"
                }
              />
            </span>
          </div>
          <div className="fourth">
            <span className="img-conatiner">
              <img
                className="float-img"
                src={
                  "https://www.flint.money/_next/image?url=%2Fhero-assets%2Fprotect.png&w=3840&q=75"
                }
              />
            </span>
          </div>
        </div>

        {/* shades background */}
        <div className="shades shades-right">
          <span className="shades-outer">
            <img
              className="shades-img"
              alt="right"
              src={
                "https://www.flint.money/_next/image?url=%2Fhero-assets%2Fps.png&w=2048&q=75"
              }
            />
          </span>
        </div>
        <div className="shades shades-left">
          <span className="shades-outer">
            <img
              src={
                "https://www.flint.money/_next/image?url=%2Fhero-assets%2Fbs.png&w=2048&q=75"
              }
              className="shades-img"
            />
          </span>
        </div>

        {/* infomation */}
        <div className="information centered column">
          <div className="main">
            <div className="title">
              10% returns.
              <br />
              Now yours.
            </div>
            <div className="sub-title">Invest and grow your stablecoins.</div>
          </div>
          <div className="invest-now">
            <div className="invest-now-txt">Invest now</div>
          </div>
        </div>
      </div>

      {/* sticky image  */}
      <div className="sticky-main">
        <div className="sticky-container">
          <div className="sticky-img-main">
            <div className="sticky-img-container">
              {/* INLINE CSS */}
              <span
                style={{
                  display: "block",
                  position: "relative",
                  width: "initial",
                  height: "initial",
                  opacity: 1,
                  padding: "100% 0px 0px",
                }}
              >
                <img
                  className="sticky-img"
                  alt="side image"
                  src={
                    "https://www.flint.money/_next/image?url=%2Fright.png&w=2048&q=75"
                  }
                />
              </span>
            </div>
          </div>
          <StickyWrapper />
        </div>
      </div>

      {/* custom reusable card  */}
      <div className="cards">
        <div className="shades">
          <img
            className="card-img"
            src={
              "https://www.flint.money/_next/image?url=%2Fhero-assets%2Fbs.png&w=2048&q=75"
            }
          />
        </div>
        <div className="scrollerContainer">
          {cardData.map((ele, index) => (
            <Card key={index} cardData={ele} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
