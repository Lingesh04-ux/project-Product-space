import React from "react";
import ".././styles/LearnBest.scss";
import card1 from "../resource/learnBest/img1.png";
import card2 from "../resource/learnBest/img2.png";
import card3 from "../resource/learnBest/img3.png";
import card4 from "../resource/learnBest/img4.png";
import card5 from "../resource/learnBest/img5.png";

function LearnBest() {
  return (
    <div className="learn-best-main">
      <div className="learn-best-main-1">
        <div className="learn-best-titles-wrapper">
          <div className="learn-best-titles-div">
            <p className="learn-best-title">Learn from the Best</p>
            <p className="learn-best-sub-title">
              Fast track your journey into product management and emerge into
              your dream role as PM
            </p>
          </div>
        </div>

        <div className="learn-best-scroll-div">
          <div className="carousel-container">
            <div className="carousel-track">
              {/* Duplicate the cards for infinite scroll feel if needed */}
              <div className="card">
                <img src={card1} alt="Mentor 1" />
              </div>
              <div className="card">
                <img src={card2} alt="Mentor 2" />
              </div>
              <div className="card">
                <img src={card3} alt="Mentor 3" />
              </div>
              <div className="card">
                <img src={card4} alt="Mentor 4" />
              </div>
              <div className="card">
                <img src={card5} alt="Mentor 5" />
              </div>
            </div>
            <div className="fade-left"></div>
            <div className="fade-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnBest;
