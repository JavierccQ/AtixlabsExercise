import React from "react";
import SectionThreeimg from "../../assets/SectionThreeImg1.PNG";

import "./style.css";

const SectionThree = () => {
  return (
    <div className="sectionThree">
      <div className="row">       
        <div className="col-md-6 col-sm-12 sectionThreeLeft">
          <div className="topLeftMessage1">
            <p>FOREING EXCHANGE CONTROL</p>
          </div>
          <h2 className="mb-2">Control of currency changes</h2>
          <p className="mb-4 allsectionp">
            This module is responsible for tracking the exchange rate, it is
            updated as soon as it receives new data and is synchronized whith
            the table. You can independently indicate which courses you want to
            see on your page, just add them to the table.
          </p>
          <button type="button" className="btn">
            Learn More
          </button>
        </div>        
        <div className="col-md-6 col-sm-12 sectionThreeRight">
          <div className="contentImg">
            <img src={SectionThreeimg} alt="SectionThreeimg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
