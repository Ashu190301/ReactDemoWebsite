import React from 'react';
import "./Contact.css";
import Phone from "../../img/Phone.png";
import email from "../../img/email.png";
import Address from "../../img/Address.png";
import {useRef,useState,useContext} from "react";

import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

function Contact() {

      const formRef = useRef();
      const[done, setDone]=useState(false);
      const theme=useContext(ThemeContext);
       const darkMode=theme.state.darkMode;

      const handleSubmit=(e)=>{
          e.preventDefault();

          emailjs.sendForm(
              "service_5rf4vte",
               "template_a7fvf51", 
               formRef.current,"6xSZ7dNGvoBrhaxmQ")

          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });

      }

  return (
    <div className="c">
      <div className="c-bg"></div>
          <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone} 
                        className="c-icon"
                        />
                      +91 687 873 3452
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={email} 
                        className="c-icon"
                        />
                      abcdemo@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Address} 
                        className="c-icon"
                        />
                      Address Address
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your Story?</b>
                     Get in touch . Always available for freelancing if the right project comes along.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    {done && "ThankYou..."}
                </form>
            </div>
          </div>  
    </div>
  )
}

export default Contact