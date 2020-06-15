import React from "react";
import "./style.css";
import Logo from "../../assets/OniblueLogo.PNG"


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
          <a href="#">Insertar Iconos</a>
        </div>
      </div>
      <div className="logostyle"> <img src={Logo} alt="Logo"/></div>
      <div className="TmMsg allsectionp"> All right reserved Oniblue™ 2018</div>
    </div>
  );
};
export default Footter;
