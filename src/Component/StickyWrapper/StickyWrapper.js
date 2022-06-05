import React from "react";
import { stickyWrapperData } from "../../mockup-data/data";
import "./stickyWrapper.css";

const StickyWrapper = () => {
  return (
    <div className="container">
      {stickyWrapperData.map((ele) => (
        <div className="item-container" key={ele.id}>
          <div style={{ opacity: 1 }}>
            <div className="details">
              <div className="heading">{ele.header}</div>
              <div className="description">{ele.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyWrapper;
