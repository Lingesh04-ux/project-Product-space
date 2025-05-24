import React from 'react'
import img1 from '../resource/programOffers/img1.png';
import img2 from '../resource/programOffers/img2.png';
import tickIcon from '../resource/programOffers/tickIcon.png';
import discountIcon from '../resource/programOffers/discountIcon.png';
import enrollIcon from '../resource/programOffers/enrollIcon.png';
import downloadIcon from '../resource/programOffers/downloadIcon.png';

function ProgramsOffer() {

  return (
    <div className="programs-offer-div">
        <div className="programs-offer-div-1">

            <p className='programs-offer-title'>Programs We Offer</p>
            
            <div className="programs-div">
              <div className="programs-div-1">

                <div className="img-1-div">
                    <img src={img1} alt="img1" className='img-1' />
                </div>

                <p className='programs-1-title'>PM Fellowship Program</p>
                <button className='programs-1-btn'>5 weeks (2hrs/week)</button>

                <div className="programs-1-highlights">
                    <div><img src={tickIcon} alt="tickIcon" /> Hands-on way to learn product management</div>
                    <div><img src={tickIcon} alt="tickIcon" /> Learn in small groups with experienced product managers</div>
                    <div><img src={tickIcon} alt="tickIcon" /> Solve real-world problems with Live Projects</div>
                    <div><img src={tickIcon} alt="tickIcon" /> Live group mentorship</div>
                    <div><img src={tickIcon} alt="tickIcon" /> Build an a impressive product portfolio</div>
                    <hr />
                </div>

                    <div className="price-details-1">
                        <p className='programs-1-course-price'>Course pricing:</p>

                        <div className="price-details-1-1">
                            <p className='programs-1-price'>₹10,000 <span>₹29,000</span></p>
                            <button className='programs-1-offer-btn'><img src={discountIcon} alt="discountIcon" />20% Off</button>
                        </div>
                    </div>

                <div className="programs-1-btns">
                    <button className='programs-1-enroll-btn'>Enroll Now <img src={enrollIcon} alt="enrollIcon" className='enroll-Icon'/></button>
                    <button className='programs-1-download-btn'>
                        <div className="programs-1-download-btn-div">
                            <span>Download Curriculum</span> 
                            <img src={downloadIcon} alt="downloadIcon" className='download-Icon'/>
                        </div>
                    </button>
                </div>
              </div>

                <div className="programs-div-2">

                    <div className="programs-2-overlap-div">
                        <div className="img-2-div">
                            <img src={img2} alt="img2" className='img-2' />
                        </div>

                        <p className='programs-2-title'>Gen AI Program</p>
                    </div>

                    <button className='programs-1-btn'>5 weeks (2hrs/week)</button>

                    <div className="programs-1-highlights">
                        <div><img src={tickIcon} alt="tickIcon" /> Understanding GenAI Fundamentals</div>
                        <div><img src={tickIcon} alt="tickIcon" /> Master Use cases for GenAI in product development</div>
                        <div><img src={tickIcon} alt="tickIcon" /> Strategies for GenAI Product Roadmap & Implementation</div>
                        <div><img src={tickIcon} alt="tickIcon" /> Hands-on Learning on GenAI Tools</div>
                        <div><img src={tickIcon} alt="tickIcon" /> Expand career opportunities</div>
                        <hr />
                    </div>

                    <div className="price-details-1">
                        <p className='programs-1-course-price'>Course pricing:</p>

                        <div className="price-details-1-1">
                            <p className='programs-1-price'>₹10,000 <span>₹29,000</span></p>
                            <button className='programs-1-offer-btn'><img src={discountIcon} alt="discountIcon" />20% Off</button>
                        </div>
                    </div>

                    <div className="programs-1-btns">
                        <button className='programs-1-enroll-btn'>Enroll Now <img src={enrollIcon} alt="enrollIcon" /></button>
                        <button className='programs-1-download-btn'><span>Download Curriculum</span> <img src={downloadIcon} alt="downloadIcon" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramsOffer
