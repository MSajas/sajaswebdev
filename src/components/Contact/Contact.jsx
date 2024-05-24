import React, { useContext, useRef, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g92yydm",
        "template_zn1lowj",
        form.current,
        "txUuThNLBXx2xFfJp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Feel free to contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
        <FormGroup className="contact__form ">
                  <Input placeholder="Your Name" type="text" name="user_name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="user_email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone" type="phone" name='user_phone' />
                </FormGroup>
                <FormGroup className="contact__form"> 
                  <textarea
                    rows="5"
                    placeholder="Please let us know How we can help you?" name="message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
  </form>
      </div>
    </div>
  );
};

export default Contact;
