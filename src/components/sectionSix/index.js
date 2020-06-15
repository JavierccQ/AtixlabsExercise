import React from "react";
import "./style.css";

const SectionSix = () => {
  return (
    <div className="sectionSix">
      <div className="row">
        <div className="col-md-12 col-sm-12 sectionSixLeft">
          <h2>Start monitoring your cards right now</h2>
          <p className="mb-4">
            If you register now, you will receive 15 days of product use
            completely unheeded
          </p>
          <div>
            <button type="button" className="btn">
              Get Started Free
            </button>

            <button className="btn buttonUnique">or you can view pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionSix;
