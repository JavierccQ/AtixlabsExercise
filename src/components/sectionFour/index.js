import React from "react";
import SectionFourimg from "../../assets/SectionFourImg1.PNG";

import "./style.css";

const SectionFour = () => {
  return (
    <div className="sectionFour">
      <div className="row">       
        <div className="col-md-6 col-sm-12 sectionFourRight">
          <div className="contentImg">
            <img src={SectionFourimg} alt="SectionFourimg" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 sectionFourLeft">
          <div className="topRightMessage">
            <p>TECHNICAL SUPPORT</p>
          </div>
          <h2 className="mb-2">Solve your issues instantly</h2>
          <p className="mb-4 allsectionp">
            The technical support of our service is working at a completely new
            level, we are trying to solve your problems instantly, you just need
            to describe your problem and we immediately pounce for its solution.
            Our technical assistants work around the clock.
          </p>
          <button type="button" className="btn">
            Learn More
          </button>
        </div>        
      </div>
    </div>
  );
};
export default SectionFour;
