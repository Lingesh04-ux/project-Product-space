import React from "react";
import one from "../resource/realSuccess/oneOne.png";
import two from "../resource/realSuccess/oneTwo.png";
import three from "../resource/realSuccess/oneThree.png";
import twoOne from "../resource/realSuccess/twoOne.png";
import twoTwo from "../resource/realSuccess/twoTwo.png";
import twoThree from "../resource/realSuccess/twoThree.png";
import twoFour from "../resource/realSuccess/twoFour.png";
import { useState } from "react";

function RealSuccess() {
  const [showAll, setShowAll] = useState(false);

  const rowOne = [
    <img src={one} alt="one-images" />,
    <img src={two} alt="one-images" />,
    <img src={three} alt="one-images" />,
  ];

  const rowTwo = [
    <img src={twoOne} alt="two-images" />,
    <img src={twoTwo} alt="two-images" />,
    <img src={twoThree} alt="two-images" />,
    <img src={twoFour} alt="two-images" />,
  ];

  // const visibleTestimonials = showAll ? rowOne : rowOne.slice(0,2);

  return (
    <div className="real-success-main-div-1-1">
      <div className="real-success-main-div-1">
        <div className="real-success-main-div">
          <div className="real-success-main-title-wrapper">
            <div className="real-success-title-wrapper">
              <p>Real Success, Real Impact</p>
            </div>
          </div>

          <div className="real-success-motion-wrapper">
            <div className="reals-success-hide">
              <div className={`fade-wrapper ${showAll ? "expanded" : ""}`}>
                <div className="real-success-row-one">
                  <div className="real-success-row-one-wrapper">
                    {rowOne.concat(rowOne).map((one, index) => (
                      <div className="slide-one" key={index}>
                        {one}
                      </div>
                    ))}
                  </div>
                </div>

                {/* {!showAll && (
                        <button className="show-more-btn" onClick={() => setShowAll(true)}>
                        More such stories
                        </button>
                    )} */}
              </div>
            </div>

            <div className="second-row-hidden-content">
              <div className={`fade-wrapper ${showAll ? "expanded" : ""}`}>
                <div className="testimonial-grid">
                  <div className="real-success-row-two">
                    <div className="real-success-row-two-wrapper">
                      {rowTwo.concat(rowTwo).map((two, index) => (
                        <div className="slide-two" key={index}>
                          {two}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="real-success-row-one">
                    <div className="real-success-row-one-wrapper">
                      {rowOne.concat(rowOne).map((one, index) => (
                        <div className="slide-one" key={index}>
                          {one}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="real-success-row-two">
                    <div className="real-success-row-two-wrapper">
                      {rowTwo.concat(rowTwo).map((two, index) => (
                        <div className="slide-two" key={index}>
                          {two}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {!showAll && (
                <button
                  className="show-more-btn"
                  onClick={() => setShowAll(true)}
                >
                  More such stories
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealSuccess;
