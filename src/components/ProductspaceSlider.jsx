import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ProductspaceSlider.scss';
// import { images } from '../datas/images.js';
import img1 from '../resource/aiSlider/slider1.png';
import img2 from '../resource/aiSlider/slider2.png';
import img3 from '../resource/aiSlider/slider3.png';
import img4 from '../resource/aiSlider/slider4.png';


const slides = [
  {
    id: 1,
    title: 'Industry Focus Content',
    image: img1, // Ensure this path is correct
  },
  {
    id: 2,
    title: 'Personalized Guidance from Industry Leaders',
    image: img2,
  },
  {
    id: 3,
    title: 'Interview Preparation with Mock Interviews',
    image: img3,
  },
  {
    id: 4,
    title: 'Job Placement Support and Career Guidance',
    image: img4,
  },
];

const ProductspaceSlider = () => {
  const [index, setIndex] = useState(0);

  const slideVariants = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
    <div className="productspace-slider-div">

    <div className='productspace-slider-rapper'>
      <div className="productspace-slider-title">
        <p className='productspace-slider-title-1'>Why Product Space</p>
        <p className='productspace-slider-content'>Fast track your into journey into product management and emerge into dream role as PM</p>
      </div>

      <div className="carousel-container">
        <div className="image-slider">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].id}
              src={slides[index].image}
              alt={slides[index].title}
              className="slide-image"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        <div className="indicator-buttons">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              onClick={() => setIndex(i)}
              className={i === index ? 'active' : ''}
            >
              <div className='slider-image-contents'>
                <p className='slider-image-titles'><span>0{i + 1}</span> <br />{slides[i].title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
    </>
  );
};

export default ProductspaceSlider;
