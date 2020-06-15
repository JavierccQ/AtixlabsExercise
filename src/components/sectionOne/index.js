import React from "react";
import CreditCardTop from "../../assets/ImagenHeader.png";
import ArrowDown from "../../assets/ArrowDown.svg"
import "./style.css";

const SectionOne = () => {
  return (
    <div className="sectionOne">
      <div className="row">
        <div className="col-md-6 col-sm-12 sectionOneLeft">
          <h1 className ="pb-3 pt-3">Combine all your credits cards in one place</h1>
          <p className="pb-3 pt-3">
            We allow you to connect different bank cards in one system, in wich
            you will have the opportunity to manage your financial data and
            track the statistics of your costs.
          </p>
          <button type="button" className="btn mt-4">
            Get Started
          </button>
        </div>
        <div className="col-md-6 col-sm-12 sectionOneRight">
          <div className="contentImg">
            <img src={CreditCardTop} alt="CreditCardTop" />
          </div>
        </div>
      </div>
      <div className="dropDownBtnLabel">
        <div className="ArrowContainer">
          <button className="btn "> <img src={ArrowDown} alt="ArrowDown" width="20px"/></button>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
