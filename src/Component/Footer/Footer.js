import React from "react";
import "./footer.css";
import { ratingData, socialMediaIconsData } from "../../mockup-data/data";

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* background shades */}
      <div className="shades shades-right">
        <span className="shader-outer">
          <span className="shader-inner" />
          <img
            alt="shader img"
            src={
              "https://www.flint.money/_next/image?url=%2Fhero-assets%2Fps.png&w=2048&q=75"
            }
            className="shader-img"
          />
        </span>
      </div>
      <div className="shades shades-left">
        <span className="shader-outer">
          <span className="shader-inner" />
          <img
            alt="shader img"
            src={
              "https://www.flint.money/_next/image?url=%2Fhero-assets%2Fbs.png&w=2048&q=75"
            }
            className="shader-img"
          />
        </span>
      </div>
      
      {/* rating array */}
      <div className="footer-info">
        <div className="footer-info-rating">
          {ratingData.map((ele, index) => (
            <div className="footer-rating-container" key={index}>
              <div className="rating">{ele.rating}</div>
              <div className="stars">
                <span className="stars-outer">
                  <img alt="star img" className="star-img" src={ele.image} />
                </span>
              </div>
              <div className="store">
                <div className="logo">
                  <span className="store-outter">
                    <img alt="store img" src={ele.store} className="store-img" />
                  </span>
                </div>
                <div>{ele.storeName}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-container">
          <div className="link">Home</div>
          <div className="link">About us</div>
          <div className="link">FAQ</div>
          <div className="link">Careers</div>
        </div>
      </div>

      <div className="lastpart">
        <div className="info">
          Copyright © 2021-22 Growflint Technologies Pvt. Ltd.
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div className="row">
          {socialMediaIconsData.map((ele, index) => (
            <div className="social-icon" key={index}>
              <div className="icon">
                <span className="icon-outter">
                  <img alt={ele.name} src={ele.icon} className="icon-img" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
