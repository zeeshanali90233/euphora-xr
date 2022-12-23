import React from 'react'
import "../App.css";
import logoround from '../Assets/Images/logoredround.png';
import { CiFacebook } from 'react-icons/ci';
import { RiLinkedinFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import { BsYoutube } from 'react-icons/bs';




const Footer = () => {
  return (
    <section className='footer-container'>
        <div className="logo">
            <img src={logoround} alt="" width={50}/>
        </div>
        <h1><strong>Lets help you build your product.</strong></h1>
        <h1>Don’t think it over and give us a shot to turn your ideas into reality!</h1>
        <a href="#"><button className='btn-get-touch'>Get In Touch</button></a>
        <div className="logo">
          <div className="facebook">
            <a href="https://www.facebook.com/EuphoriaXR" target={"_blank"}><CiFacebook color={"white"} size={40}/></a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/company/euphoriaxr" target={"_blank"} ><RiLinkedinFill color={"white"} size={25}/> </a>
          </div>
          <div className="instagram ">
            <a href="https://www.instagram.com/euphoriaxr_/" target={"_blank"} ><FiInstagram color={"white"} size={25}/> </a>
          </div>
          <div className="youtube">
            <a href="https://www.youtube.com/channel/UCPSKm-H-0RaaeTF1dv1I9tQ" target={"_blank"} ><BsYoutube color={"white"} size={25}/> </a>
          </div>
        </div>
        <div className="footer-goto">
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Whats New</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>

        <div className="copyright">
            <h1>&copy; 2022 Euphoria XR LLC</h1>
        </div>
    </section>
  )
}

export default Footer