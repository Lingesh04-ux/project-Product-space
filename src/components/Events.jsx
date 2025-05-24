import React, { useRef } from 'react';
import Slider from 'react-slick';
import img1 from '../resource/events/img1.png';
import { FiShare2 } from 'react-icons/fi';
import '../styles/Events.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const eventData = [
  {
    date: 'DEC 14',
    time: '11:00 am - 2:00 pm',
    title: 'Master Product Analytics in Just 3 Hour-Workshop session',
    image: img1,
  },
  {
    date: 'DEC 15',
    time: '2:00 pm - 5:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
    image: img1,
  },
  {
    date: 'DEC 16',
    time: '6:00 pm - 9:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
    image: img1,
  },
  {
    date: 'DEC 17',
    time: '6:00 pm - 9:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
    image: img1,
  },
  {
    date: 'DEC 18',
    time: '6:00 pm - 9:00 pm',
    title: 'Master Product Analytics in Just 3 Hour- Workshop session',
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
            <div className='events-header-1'>
                <div className="events-header-1-1">Events at Product Space</div>
                <div className="events-header-1-2">Events at PS</div>
                <div className="events-sub-1-1">Claim your free lesson today and start exploring </div>
            </div>
        <div className="events-header">
            <h2 className="events-title">Live/Upcoming Events</h2>
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
                        <div className="event-datetime">
                            <div className="event-details-contents">
                                <span className="event-date">{event.date}</span>
                                <span className="event-time">{event.time}</span>
                            </div>
                            <button className="share-btn"><FiShare2 size={23}/></button>
                        </div>
                        <p className="event-title">{event.title}</p>
                        <button className="register-btn">Register Now</button>
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