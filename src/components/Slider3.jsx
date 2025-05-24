// components/BrandSlider.jsx
import React from "react";
import "../styles/Slider3.scss";
import delhi from '../resource/silder/delhi.png';
import banaglore from '../resource/silder/iimbanaglore.png';
import kharagpur from '../resource/silder/iitkharagpur.png';
import madras from '../resource/silder/iitmadras.png';
import roorkee from '../resource/silder/iitroorkee.png';

const brands = [<img src={delhi} className="clg-img"/>, 
                <img src={banaglore} className="clg-img"/>, 
                <img src={kharagpur} className="clg-img"/>, 
                <img src={madras} className="clg-img"/>, 
                <img src={roorkee} className="clg-img"/>
];

const BrandSlider = () => {
  return (
    <>
    <div className="main-slider">

        <div className="slider-title">
            <p className="slider-title-name">Trusted by <br />Students from</p>
            <p className="slider-title-name-1">Trusted by Students from</p>
        </div>

        <div className="slider-container">
            <div className="slider-track">
                {brands.concat(brands).map((brand, index) => (
                <div className="slide" key={index}>
                    {brand}
                </div>
                ))}
            </div>
        </div>

    </div>
    </>
  );
};

export default BrandSlider;
