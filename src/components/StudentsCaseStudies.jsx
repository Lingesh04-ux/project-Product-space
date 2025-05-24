import React, { useRef } from 'react';
import '../styles/StudentsCaseStudies.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa'
import { FiBookmark, FiShare2 } from 'react-icons/fi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import arrowIcon from '../resource/studentsCaseStudies/arrowIcon.png';
import img1 from '../resource/studentsCaseStudies/img1.png';
import img2 from '../resource/studentsCaseStudies/img2.png';

const cards = [
  { id: 1, title: "Improving MagicBricks Viewing Experience", image: img1 },
  { id: 2, title: "Improving MagicBricks Viewing Experience", image: img2 },
  { id: 3, title: "Improving MagicBricks Viewing Experience", image: img1 },
  { id: 4, title: "Improving MagicBricks Viewing Experience", image: img2 },
  //   { id: 5, title: "Card 5" },
  //   { id: 6, title: "Card 6" },
  //   { id: 7, title: "Card 7" },
  //   { id: 8, title: "Card 8" }
];

const CardSlider = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  //-------------------------------------------------------------------------------------------------------------------
    // const sliderRef = useRef(null);
  
    // const settings = {
    //   dots: false,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //       }
    //     },
    //     {
    //       breakpoint: 640,
    //       settings: {
    //         slidesToShow: 1,
    //       }
    //     }
    //   ]
    // };
  //-------------------------------------------------------------------------------------------------------------------


  return (
    <>
      <div className="students-case-studies-main">
        <div className="students-case-studies-div">

          <div className="students-case-studies-wrapper">
            <div className="students-case-studies-title">
              <p className='students-case-studies-title-1'>Students case studies</p>
              <p className='students-case-studies-title-2'>Explore the innovative AI projects our students have crafted, showcasing their creativity and technical skills.</p>
            </div>
          </div>

          <div className="slider-wrapper">

            {/* <button className="nav-button left" onClick={() => scroll('left')}>&lt;</button> */}
            

            <div className="slider-container-main">

            {/* <Slider ref={sliderRef} {...settings}>
                {cards.map((card) => (
                  <div className="event-card-wrapper" key={card.id}>
                    <div className="event-card">
                      <AnimatePresence>
                        <motion.img src={card.image} key={card.id} />
                      </AnimatePresence>
                      <img src={card.image} alt="Event" className="event-image-1" />
                      <div className="event-details">
                        <p>{card.title}</p>
                        <img src={arrowIcon} alt="arrowIcon" className='card-content-arrow-icon' />
                      </div>

                      <div className="card-content-wrapper">
                        <div className="card-content-titles-1">
                          <p className='card-content-p'>A sneak peek into what you will learn in our 10-week curriculum.</p>
                        </div>

                        <div className="card-content-titles-2">
                          <div className="card-content-btn">
                            <button>Prototype Testing</button>
                            <button>News</button>
                          </div>

                          <div className="card-content-icons-div">

                            <div className="card-content-icons">
                              <FaRegHeart size={15} color='#24304C' /><p>24</p>
                            </div>

                            <div className="card-content-icons">
                              <FiBookmark size={15} color='#24304C' /><p>24</p>
                            </div>

                            <div className="card-content-icons">
                              <FiShare2 size={15} color='#000' />
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider> */}
{/*---------------------------------------------------------------------------------------------------------*/}
            {/* <Slider ref={sliderRef} {...settings}> */}
              <div className="slider-container" href={containerRef}> 
                {cards.map((card) => (
                  <div className="slider-card" key={card.id}>
                    <div className="card-content">
                      <AnimatePresence>
                        <motion.img src={card.image} key={card.id} />
                      </AnimatePresence>

                      <div className="card-content-titles">
                        <p>{card.title}</p>
                        <img src={arrowIcon} alt="arrowIcon" className='card-content-arrow-icon' />
                      </div>

                      <div className="card-content-wrapper">
                        <div className="card-content-titles-1">
                          <p className='card-content-p'>A sneak peek into what you will learn in our 10-week curriculum.</p>
                        </div>

                        <div className="card-content-titles-2">
                          <div className="card-content-btn">
                            <button>Prototype Testing</button>
                            <button>News</button>
                          </div>

                          <div className="card-content-icons-div">

                            <div className="card-content-icons">
                              <FaRegHeart size={15} color='#24304C' /><p>24</p>
                            </div>

                            <div className="card-content-icons">
                              <FiBookmark size={15} color='#24304C' /><p>24</p>
                            </div>

                            <div className="card-content-icons">
                              <FiShare2 size={15} color='#000' />
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            {/* </Slider> */}

            </div>

            {/* <button className="nav-button right" onClick={() => scroll('right')}>&gt;</button> */}
          </div>

          <div className="nav-btn-div">
            {/* <button className="nav-button left" onClick={() => sliderRef.current.slickPrev()}>&lt;</button>
            <button className="nav-button right" onClick={() => sliderRef.current.slickNext()}>&gt;</button> */}
            <button className="nav-button left" onClick={() => scroll('left')}>&lt;</button>
            <button className="nav-button right" onClick={() => scroll('right')}>&gt;</button>
          </div>

        </div>
      </div>
    </>
  );
};


export default CardSlider;
