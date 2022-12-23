import React from 'react'
import widget3Logo from '../Assets/Images/widget-3 logo.jpg';
import widget4Logo from '../Assets/Images/widget-4 logo.jpg';
import widget8Logo from '../Assets/Images/widget-8 logo.jpg';
import "../App.css";
const MoreAbout = () => {
  return (
    <section className="more-about">
        <div className="widget widget-1">
        </div>
        <div className="widget widget-2">
        <h4>Your Trusted Nearshore Development Partner</h4>
        <p>Our in-house top tier AR/VR developers works 100% as your on-site team. They are fully-synced and always available for a chat, whether it’s a daily standup, a code review or an important decision to be made. And if needed, they are ready to get on a quick meeting.</p>
        </div>
        <div className="widget widget-3">
          <img src={widget3Logo} alt="" />
        </div>
        <div className="widget widget-3">
          <img src={widget4Logo} alt="" width={250}/>
        </div>
        <div className="widget widget-5">
        </div>
        <div className="widget widget-2">
        <h4>Custom AR/VR Development</h4>
        <p>The creators, inventors, and developers of our teamwork using the latest and upgraded Virtual Reality Experiences. They make sure not to left any stone unturned and remain at the top of storytelling innovation.</p>
        </div>
        <div className="widget widget-2">
        <h4>MVP Builder</h4>
        <p>We love startups, with a streamlined process we build your MVP quickly and on budget. Our startup product experts make sure to cover your all development headaches so you can focus on business growth. We are as enthusiastic as you are and determined to test the waters early.</p>
        </div>
        <div className="widget widget-3">
          <img src={widget8Logo} alt="" width={250}/>
        </div>
        <div className="widget widget-9">
        </div>
    </section>
  )
}

export default MoreAbout