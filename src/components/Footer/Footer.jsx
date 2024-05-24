import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
       
 
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">SAJAS WEB DEVELOPER</h5>
              <p className="office__info">330/3 Mosque road, Thalduwa Avissawella.</p>
              <p className="office__info">Phone: +94 774116702</p>

              <p className="office__info">Email: sajazeema@outlook.com</p>

              <p className="office__info">Office Time: 9am - 5pm</p>
            </div>
          
           
             
             
            <a href="#" class="btn btn-primary">Top</a>
           

           
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                SAJAS. All rights reserved.
              </p>
            </div>
           
            
    </footer>
  );
};

export default Footer;
