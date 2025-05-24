import React, { useEffect, useRef, useState } from "react";
import '../../styles/MobileView/ProductspaceSliderMobile.scss';
import img1 from '../../resource/aiSlider/sliderMob1.png';
import img2 from '../../resource/aiSlider/sliderMob2.png';
import img3 from '../../resource/aiSlider/sliderMob3.png';
import img4 from '../../resource/aiSlider/sliderMob4.png';


const steps = [
  {
    title: "Industry Focus Content",
    image: img1,
  },
  {
    title: "Personalized Guidance from Industry Leaders",
    image: img2,
  },
  {
    title: "Interview Preparation with Mock Interviews",
    image: img3,
  },
  {
    title: "Job Placement Support and Career Guidance",
    image: img4,
  },
];

export default function ProductspaceSliderMobile() {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

  const onScroll = () => {
    const topOffsets = sectionRefs.current.map((ref) =>
      ref ? ref.getBoundingClientRect().top : Infinity
    );

    const newIndex = topOffsets.findIndex((offset) => offset > 150) - 1;
    const safeIndex = Math.max(0, newIndex);

    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

    const finalIndex = nearBottom
      ? sectionRefs.current.length - 1
      : safeIndex;

    setActiveIndex(finalIndex);
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // initialize on mount

  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <div className="slider-mobile-main-container">
      <div className="slider-mobile-main-container-1">
        <h2 className="slider-mobile-title-1">Why Product Space</h2>
        <p className="slider-mobile-subtitle-1">
          Fast track your journey into product management and emerge into your dream role as PM
        </p>

        <div className="timeline-container">
          <div className="timeline-line" />
          <div
            className="progress-line"
            // style={{ height: `${(activeIndex + 0.5) * 40}%` }} // Adjust 25% to match scroll height distribution
            style={{ height: `${Math.min(((activeIndex + 1) / steps.length) * 100, 100)}%`, }}  // Adjust 25% to match scroll height distribution
          />
          <div className="timeline-steps">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                className={`timeline-step ${i <= activeIndex ? "active" : ""}`}
              >
                <h4>{step.title}</h4>
                <img src={step.image} alt={step.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
