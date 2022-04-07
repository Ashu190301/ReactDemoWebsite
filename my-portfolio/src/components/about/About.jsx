import React from "react";
import "./About.css";
import award from "../../img/award.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            className="a-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAE0x7ONAlA4foGbEQr9o-CcFEn62W0uwOAQ&usqp=CAU"
            alt="me"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Being a student its my first and foremost duty to be organized and
          presentable.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="a-award">
          <img className="a-award-img" src={award} alt="award" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
