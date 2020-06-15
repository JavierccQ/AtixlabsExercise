import React from "react";
import SectionFiveimg from "../../assets/SectionFiveImg1.PNG";

import "./style.css";

const SectionFive = () => {
  return (
    <div className="sectionFive">
      <div className="row">
        <div className="col-md-6 col-sm-12 sectionFiveLeft">
          <div className="topLeftMessage3">
            <p>FOREIGN EXCHANGE CONTROL</p>
          </div>
          <h2 className="mb-2">Track your transactions</h2>
          <p className="mb-4 allsectionp">
            Tracking purchases always allows you to be aware of where your money
            os, you are always aware of how much money you spent and how much
            you have on the card, so you can control all your transactions from
            one card.
          </p>
          <button type="button" className="btn">
            Learn More
          </button>
        </div>
        <div className="col-md-6 col-sm-12 sectionFiveRight">
          <div className="contentImg">
            <img src={SectionFiveimg} alt="SectionFiveimg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFive;
