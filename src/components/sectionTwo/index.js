import React from "react";
import SectionTwoImg1 from "../../assets/SectionTwoImg1.PNG";
import SectionTwoImg2 from "../../assets/SectionTwoImg2.PNG";
import SectionTwoImg3 from "../../assets/SectionTwoImg3.PNG";

import "./style.css";

const SectionTwo = () => {
  return (
    <div className="sectionTwo">      
      <div className="row justify-content-center">
        <div className="col-7 sectionTwoCenter">
          <h2>Idea of the Proyect</h2>
          <p className="allsectionp">
            We have developed a system that allows you to unite many bank cards
            into one electronic card, thereby tracking all data synchrinizing
            all of them as one whole,you can at any time track transactions of
            several cards simultaneosly and this is only a small part of what
            Oniblue can.
          </p>
        </div>
      </div>
      <div className="row">        
        <div className="col-md-4 col-sm-12 sectionTwoLeft">
          <div className="sectionTwoBox mb-4">
            <img src={SectionTwoImg1} alt="SectionTwoImg1" />
          </div>
          <div>
            <h3  className="mb-4 ">Smart Electronic Card</h3>
            <p className="allsectionp">
              Our map is designed in such a way that it unitesall your cards in
              the system and synchronizes data as one multifunction card.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 sectionTwoLeft">
          <div className="sectionTwoBox mb-4">
            <img src={SectionTwoImg2} alt="SectionTwoImg2" />
          </div>
          <div>
            <h3 className="mb-4" >Real-time statistics</h3>
            <p className="allsectionp">
              On varius pages there are graphic statistics, its data is updated
              in the real time and at any time you can find out your data.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 sectionTwoLeft">
          <div className="sectionTwoBox mb-4">
            <img src={SectionTwoImg3} alt="SectionTwoImg3" />
          </div>
          <div>
            <h3 className="mb-4" >Receiving the information</h3>
            <p className="allsectionp">
              This function allows you to process your data in at the same
              time,when they come to your card. Information will be sent to the
              main page
            </p>
          </div>
        </div>        
      </div>
    </div>
  );
};
export default SectionTwo;
