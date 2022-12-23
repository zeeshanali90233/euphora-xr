import React from 'react'
import Header from '../Components/Header';
import Carousel from '../Components/Carousel';
import ElementerGrid from '../Components/ElementerGrid';
import MoreAbout from '../Components/MoreAbout';
import ClientsLogoGrid from '../Components/ClientsLogoGrid';
import "../App.css";
import Footer from '../Components/Footer';



const Home = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <section>
        <div className="intro">
            <h1 className='heading'>We believe in the power of Extended Reality XR and the art of VR AR</h1>
            <p className='para'>Being a far-reaching real word (VR/AR/MR) and Extended Reality XR development company, we assist the clients who have faith in us throughout the process of developing profound alluring AR VR experiences until it stands on their own. Whether it be the choice of the perfect tale to mention, the proposal of massive range, or the inclination towards the best strategies for development, we create profound words that cast a lasting impression on the viewers and your audience.</p>
            <a href="#"><button className='sched-call'>Schedule a Call</button></a>
            <h1 className='our-projects'>Our Projects</h1>
        </div>
    </section>
    <ElementerGrid/>
    <section>
        <div className="intro">
            <h1 className='heading'>Explore Our Extended Reality XR App Development Company Case Studies</h1>
            <p className='para'>We are delighted to work with amazing and innovative clients. Below are just a few of the companies we’ve had the opportunity to work with. Whether it be an Augmented Extended Reality XR application or virtual reality training experience, Euphoria XR has helped its clients from ideation to deployment. Click on the case studies to find out more about what our clients say.</p>
            <a href="#"><button className='sched-call view-more'>View More</button></a>
        </div>
    </section>
    <MoreAbout/>
    <div className="our-client">
          <div className="title"><h3>Our Clients</h3></div>
          <p>Some of the industry’s widely used names have chosen us to design their VR AR content, and our content-enabled them to share their stories impressively.</p>
          </div>
    <ClientsLogoGrid/>
    <Footer/>
    </>
  )
}

export default Home