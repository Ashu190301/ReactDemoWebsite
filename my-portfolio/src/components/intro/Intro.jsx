import React from 'react';
import "./Intro.css";
import cat from "./img/cat.png";

function Intro() {
  return (
    <div className="i">
       <div className="i-left">
           <div className="i-left-wrapper">
             <h2 className="i-intro"> Hello, My name is</h2>
             <h1 className="i-name"> Shivangi Bose</h1>
             <div className="i-title">
                 <div className="i-title-wrapper">
                    <div className="i-title-item">Student</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Animal Welfare Activist</div>
                    <div className="i-title-item">Dancer</div>
                 </div>
             </div>

             <p className="i-desc">
                 I am a Student of Bachelor Of Technology in Computer Science Department.
             </p>
           </div>
           
       </div>

       <div className="i-right">
           <div className="i-bg"></div>
           <img src={cat} alt="" className="i-img"></img>

       </div>
    </div>
  )
}

export default Intro;