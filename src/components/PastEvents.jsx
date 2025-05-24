import React, { useRef } from 'react';
import Slider from 'react-slick';
import img1 from '../resource/pastEvents/img1.png';
import { FiShare2 } from 'react-icons/fi';
import '../styles/Events.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const eventData = [
  {
    date: 'DEC 14',
    time: '11:00 am - 2:00 pm',
    title: 'Master Product Analytics in Just 3 Hour-Workshop session',
    description: "Event ended on 24th December, 2024 ",
    image: img1,
  },
  {
    date: 'DEC 15',
    time: '2:00 pm - 5:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
    description: "Event ended on 24th December, 2024 ",
    image: img1,
  },
  {
    date: 'DEC 16',
    time: '6:00 pm - 9:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
    description: "Event ended on 24th December, 2024 ",
    image: img1,
  },
  {
    date: 'DEC 17',
    time: '6:00 pm - 9:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
    description: "Event ended on 24th December, 2024 ",
    image: img1,
  },
  {
    date: 'DEC 18',
    time: '6:00 pm - 9:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
    description: "Event ended on 24th December, 2024 ",
    image: img1,
  },
];

const EventsSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="events-wrapper-1">
        <div className="events-wrapper">
        <div className="events-header">
            <h2 className="events-title">Past Events</h2>
            <div className="slider-buttons">
            <button onClick={() => sliderRef.current.slickPrev()} className="slider-btn">❮</button>
            <button onClick={() => sliderRef.current.slickNext()} className="slider-btn">❯</button>
            </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
            {eventData.map((event, index) => (
                <div className="event-card-wrapper">
                    <div className="event-card" key={index}>
                        <img src={event.image} alt="Event" className="event-image" />
                        <div className="event-details">
                        <p className="event-title-1">{event.title}</p>
                        <p className="event-description">{event.description}</p>
                        <button className="register-btn">Event Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    </div>
  );
};

export default EventsSlider;