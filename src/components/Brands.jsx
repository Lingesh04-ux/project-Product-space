import React from 'react'
//-------------1st box--------------------------------------
import hsbc from '../resource/brands/hsbc.png';
import american from '../resource/brands/american.png';
import chase from '../resource/brands/chase.png';
import justDial from '../resource/brands/justdial.png';
import mesho from '../resource/brands/mesho.png';
import true1 from '../resource/brands/true.png';
import ola from '../resource/brands/ola.png';
import pwc from '../resource/brands/pwc.png';
import swiggy from '../resource/brands/swiggy.png';
import n from '../resource/brands/n.png';
import cipla from '../resource/brands/cipla.png';
import zi from '../resource/brands/zi.png';
//--------------------------------------------------------------------
//---------------2nd box---------------------------------------------
import adda from '../resource/brands/adda.png';
import cars from '../resource/brands/cars.png';
import amazon from '../resource/brands/amazon.png';
import cred from '../resource/brands/cred.png';
import jio from '../resource/brands/jio.png';
import dehaat from '../resource/brands/dehaat.png';
import ind from '../resource/brands/ind.png';
import firstCry from '../resource/brands/firstcry.png';
import indiaMart from '../resource/brands/indiamart.png';
import magicBrics from '../resource/brands/magicbrics.png';
//---------------------------------------------------------------------------
//---------------3rd box-----------------------------------------------------
import spyne from '../resource/brands/spyne.png';
import zomato from '../resource/brands/zomato.png';
import hero from '../resource/brands/hero.png';
import masterCard from '../resource/brands/mastercard.png';
import deloitte from '../resource/brands/deloitte.png';
import tata from '../resource/brands/tata.png';
import mahindra from '../resource/brands/mahindra.png';
import verizon from '../resource/brands/verizon.png';
import builder from '../resource/brands/builder.png';
import npcl from '../resource/brands/npcl.png';
//------------------------------------------------------------------------

const firstColumn = [
    <img src={hsbc} alt="hsbc" className='first-img'/>,
    <img src={american} alt="american" className='first-img'/>,
    <img src={chase} alt="chase" className='first-img'/>,
    <img src={justDial} alt="justDial" className='first-img'/>,
    <img src={mesho} alt="mesho" className='first-img'/>,
    <img src={true1} alt="true1" className='first-img'/>,
    <img src={ola} alt="ola" className='first-img'/>,
    <img src={pwc} alt="pwc" className='first-img'/>,
    <img src={swiggy} alt="swiggy" className='first-img' />,
    <img src={n} alt="n" className='first-img'/>,
    <img src={cipla} alt="cipla" className='first-img' />,
    <img src={zi} alt="zi" className='first-img'/>
];
const secondColumn = [
    <img src={adda} alt="adda" className='second-img'/>,
    <img src={cars} alt="cars" />,
    <img src={amazon} alt="amazon" />,
    <img src={cred} alt="cred" />,
    <img src={jio} alt="jio" />,
    <img src={dehaat} alt="dehaat" />,
    <img src={ind} alt="ind" />,
    <img src={firstCry} alt="firstCry" />,
    <img src={indiaMart} alt="indiaMart" />,
    <img src={magicBrics} alt="magicBrics" />,
];
const thirdColumn = [
    <img src={spyne} alt="spyne" />,
    <img src={zomato} alt="zomato" />,
    <img src={hero} alt="hero" />,
    <img src={masterCard} alt="masterCard" />,
    <img src={deloitte} alt="deloitte" />,
    <img src={tata} alt="tata" />,
    <img src={mahindra} alt="mahindra" />,
    <img src={verizon} alt="verizon" />,
    <img src={builder} alt="builder" />,
    <img src={npcl} alt="npcl" />,
]


function Brands() {

  return (
    <div className="main-brand">

        <div className="brand-content-div">
            <p className='brand-content-title'>Placed across 310+ Product
                <br />Companies in India
            </p>
            <p className='brand-content-para'>Our Alums have been placed across various
                <br />established firms well known around the world
            </p>
            <button className='brand-jry-btn'>Kickstart Your Journey</button>
        </div>

        {/* ---------------------------------------mobile view------------------------------------- */}
            <div className="brand-content-title-div">
                <p className='brand-content-title-2'>Placed across 310+ 
                    <br />Product Companies in India
                </p>
            </div>
        {/* ------------------------------------------------------------------------------------------------*/}

        <div className="vertical-scroll-div">

            <div className="vertical-scroll-div-1">
                <div className="slider-container-1">
                    <div className="slider-track-1">
                        {firstColumn.concat(firstColumn).map((firstColumns, index) => (
                        <div className="slide-1" key={index}>
                            {firstColumns}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="vertical-scroll-div-2">
                <div className="slider-container-2">
                    <div className="slider-track-2">
                        {secondColumn.concat(secondColumn).map((secondColumns, index) => (
                        <div className="slide-2" key={index}>
                            {secondColumns}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="vertical-scroll-div-3">
                <div className="slider-container-3">
                    <div className="slider-track-3">
                        {thirdColumn.concat(thirdColumn).map((thirdColumns, index) => (
                        <div className="slide-3" key={index}>
                            {thirdColumns}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

        {/* ---------------------------------------mobile view------------------------------------- */}
            <div className="brand-content-div-2">
                <p className='brand-content-para'>Our Alums have been placed across various
                    <br />established firms well known around the world
                </p>
                <button className='brand-jry-btn'>Kickstart Your Journey</button>
            </div>
        {/* ---------------------------------------------------------------------------------------- */}
    </div>
  )
}

export default Brands
