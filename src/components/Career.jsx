import React from 'react';
import '../styles/Career.scss';
import starIcon from '../resource/career/Star.png';
import tickIcon from '../resource/career/Tick.png'
import walletIcon from '../resource/career/Wallet.png';

function Career() {

  return (

    <div className="main-career">
        <div className="icons-div">
            <div className="icons-div-wrapper-1">

                <div className="icons-div-1-1">
                    <img src={tickIcon} alt="tickIcon" className='tick-icon'/>
                    <p className='name-85'>85%</p>
                    <p className='name-comp'>Completion Rate</p>
                </div>
                <div className="icons-div-1-2">
                    <img src={walletIcon} alt="walletIcon" className='wallet-icon' />
                    <p className='name-57'>₹57 LPA</p>
                    <p className='name-median'>Median Graduate <br />Salary</p>
                </div>

            </div>

            <div className="icons-div-wrapper-2">

                <div className="icons-div-2-1">
                    <img src={starIcon} alt="starIcon" className='star-icon' />
                    <p className='name-80'>80%</p>
                    <p className='name-place'>Placement Rate</p>
                </div>
                <div className="icons-div-2-2">
                    <img src={tickIcon} alt="starIcon" className='tick-icon'/>
                    <p className='name-1000'>1000+</p>
                    <p className='name-alumin'>Alumin</p>
                </div>

            </div>
        </div>

        <div className="career-sub-heading-div">

            <div className="career-sub-heading-div-1">
                <p className='career-sub-head-1'>
                    We help you succeed in<br />your career
                </p>
                <p className='career-sub-head-para'>Our proven track record of transforming aspiring product
                    <br />managers into industry-leading professionals across top-tier
                    <br />tech companies.
                </p>
            </div>
{/*--------------------------------------mobile view--------------------------------------------------------*/ }
            <div className="career-sub-heading-div-2"> 
                <p className='career-sub-head-2-1'>We help you
                    <br />succeed in your career</p>
                <p className='career-sub-head-2-para'>
                    From zero experience to industry-ready, we 
                    <br />provide the solutions to help you thrive in every 
                    <br />phase of your product career.
                </p>
            </div>
{/*--------------------------------------mobile view--------------------------------------------------------*/ }
        </div>

    </div>
  )
}

export default Career
