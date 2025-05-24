import React from 'react'
import '../styles/Global.scss'
import '../styles/HeroSection.scss';
import playIcon from '../resource/header/playicon.svg';
import growIcon from '../resource/header/grow.svg';
import startIcon from '../resource/header/staricon.svg';
import reviews from '../resource/header/ratingimage.png';
import rectangle from '../resource/header/gradientrectangle.svg';
import headerImage from '../resource/header/headerimage.png';

function HeroSection() {
  return (

    <div className="main-herosection">

        <div className="main-herosection-contents-div">
            <div className="title-div">
                <p>Accelerate you career <span></span>
                    <img src={growIcon} alt="grow-icon" className='grow-icon'/>
                    <br />in Production Management & AI
                </p>
            </div>  

                {/*---------------------------- Mobile View ------------------------------------------------*/ } 
                <div className="title-div-1">
                    <div className="title-wrapping">

                        <div className="title-align-words-1">
                            <p className='title-align-words-1-p'>Accelerate you career</p>
                            <img src={growIcon} alt="grow-icon" className='grow-icon'/>
                        </div>

                        <div  className="title-align-words-2">
                            <p>in Production Management & AI</p>
                        </div>

                    </div>
                </div>  
                {/*----------------------------------------------------------------------------------------*/ } 

            <div className="caption-div">
                <p>Learn from Industry experts from <span>Google,Apple,</span>
                <br /><span>Microsoft,Ola,Inmobi</span> and <span>Ajio</span></p>
            </div>

            <div className="image-column">
                <img src={headerImage} alt="headerImage" className='main-herosection-image-1'/>
            </div>
            <div className="main-herosection-btns">
                <button className='explore-btn'>Explore Programs</button>
                <button className='watch-btn'>{/* image*/} 
                    <img src={playIcon} alt="play" className='watch-play-btn-img'/> Watch Demo
                </button>
            </div>
            <div className="rating-div">
                <div className="rating-div-1"> {/* should be in column*/}
                    <img src={startIcon} alt="" className='rating-star-icon'/>

                    <div className="rating-div-1-1"> {/* should be in row */}
                        <img src={rectangle} alt="" className='rating-rectangle-icon'/>
                        <p className='rating-div-1-1-name'><span>4.8</span> <br />Rating</p>
                    </div>
                </div>

                <div className="rating-div-2"> {/* should be in column*/}
                    <img src={reviews} alt="" style={{width:"75px", margin:"10px"}}/>

                    <div className="rating-div-1-2"> {/* should be in row */}
                        <img src={rectangle} alt="" style={{width:"75px"}}/>
                        <p className='rating-div-1-2-name'><span>10K+</span><br />Learners</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="main-herosection-image-div">
            <img src={headerImage} alt="headerImage" className='main-herosection-image'/>
        </div>

    </div>
  )
}

export default HeroSection
