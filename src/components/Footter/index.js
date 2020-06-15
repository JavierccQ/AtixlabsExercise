import React from "react";
import "./style.css";
import Logo from "../../assets/OniblueLogo.PNG";
import twitterIcon from "../../assets/twitter.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import youtubeIcon from "../../assets/youtube.svg";
import spinIcon from "../../assets/circle.PNG";

const Footter = () => {
  return (
    <div className="Footter">
      <div className="row justify-content-center">
        <div className="col-md-2 col-sm-12 FootterLeft">
          <h5>Company</h5>
          <a href="#">About Us</a>
          <a href="#">Carrers</a>
          <a href="#">Support</a>
        </div>
        <div className="col-md-2 col-sm-12 FootterLeft">
          <h5>Product</h5>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </div>
        <div className="col-md-2 col-sm-12 FootterLeft">
          <h5>Resources</h5>
          <a href="#">Help</a>
          <a href="#">Blog</a>
          <a href="#">Status</a>
        </div>
        <div className="col-md-2 col-sm-12 FootterLeft">
          <h5>Performance</h5>
          <a href="#">Media</a>
          <a href="#">Reach</a>
          <a href="#">Creative</a>
        </div>
        <div className="col-md-2 col-sm-12 FootterLeft">
          <h5>Contact Us</h5>
          <a href="#">+44 (0) 77 2123 9241</a>
          <a href="#">hello@onibluesocial.com</a>          
            <div className="inline">
            <a href="#">
              <img
                className="iconsBottom"
                src={twitterIcon}
                alt="twitterIcon"
              />
            </a>
            <a href="#">
              <img
                className="iconsBottom"
                src={facebookIcon}
                alt="facebookIcon"
              />
            </a>
            <a href="#">
              <img
                className="iconsBottom"
                src={linkedinIcon}
                alt="linkedinIcon"
              />
            </a>
            <a href="#">
              <img
                className="iconsBottom"
                src={youtubeIcon}
                alt="youtubeIcon"
              />
            </a>
            <a href="#">
              <img
                className="iconsBottom"
                src={spinIcon}
                alt="spinIcon"
              />
            </a>
            </div>         
        </div>
      </div>
      <div className="logostyle">       
        <img src={Logo} alt="Logo" />
      </div>
      <div className="TmMsg allsectionp"> All right reserved Oniblue™ 2018</div>
    </div>
  );
};
export default Footter;
