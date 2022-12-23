import React from 'react'
import card1bg from "../Assets/Images/card-1 logo.jpeg";
import card2bg from "../Assets/Images/card-2 logo.jpeg";
import card3bg from "../Assets/Images/card-3 logo.jpeg";
import card4bg from "../Assets/Images/card-4 logo.jpeg";
import card5bg from "../Assets/Images/card-5 logo.jpeg";
import card6bg from "../Assets/Images/card-6 logo.jpeg";
import card7bg from "../Assets/Images/card-7 logo.jpeg";
import card8bg from "../Assets/Images/card-8 logo.jpeg";

const ElementerGrid = () => {
  return (
    <section className='elementer-grid'>
      <div className="card card-1" id='card'>
        <div className="card-image-wrapper">
          <img src={card1bg} alt=""  width={150}/>
        </div>
        <div className="heading">
          <h1><a href="#">Augmented Reality</a></h1>
        </div>
      </div>
      <div className="card card-2" id='card'>
        <div className="card-image-wrapper">
          <img src={card2bg} alt=""  width={150}/>
        </div>
        <div className="heading">
          <h1><a href="#">Augmented Reality</a></h1>
        </div>
      </div>
      <div className="card card-3" id='card'>
        <div className="card-image-wrapper">
          <img src={card3bg} alt=""  width={350}/>
        </div>
        <div className="heading">
          <h1><a href="#">Virtual Reality</a></h1>
        </div>
      </div>
      <div className="card card-4" id='card'>
        <div className="card-image-wrapper">
          <img src={card4bg} alt=""  width={250}/>
        </div>
        <div className="heading">
          <h1><a href="#">360 Video and Virtual Reality</a></h1>
        </div>
      </div>
      <div className="card card-5" id='card'>
        <div className="card-image-wrapper">
          <img src={card5bg} alt=""  width={250}/>
        </div>
        <div className="heading">
          <h1><a href="#">Augmented Reality</a></h1>
        </div>
      </div>
      <div className="card card-6" id='card'>
        <div className="card-image-wrapper">
          <img src={card6bg} alt=""  width={350}/>
        </div>
        <div className="heading">
          <h1><a href="#">360 Video and Virtual Reality</a></h1>
        </div>
      </div>
      <div className="card card-7" id='card'>
        <div className="card-image-wrapper">
          <img src={card7bg} alt=""  width={250}/>
        </div>
        <div className="heading">
          <h1><a href="#">Augmented Reality & WebVR/AR</a></h1>
        </div>
      </div>
      <div className="card card-8" id='card'>
        <div className="card-image-wrapper">
          <img src={card8bg} alt=""  width={250}/>
        </div>
        <div className="heading">
          <h1><a href="#">360 Video and Virtual Reality</a></h1>
        </div>
      </div>

    </section>
  )
}

export default ElementerGrid