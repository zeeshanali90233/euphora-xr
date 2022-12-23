import React from 'react'
import logo1 from "../Assets/Images/client-logo-1.png";
import logo2 from "../Assets/Images/client-logo-2.png";
import logo3 from "../Assets/Images/client-logo-3.png";
import logo4 from "../Assets/Images/client-logo-4.png";
import logo5 from "../Assets/Images/client-logo-5.png";
import logo6 from "../Assets/Images/client-logo-6.png";
import logo7 from "../Assets/Images/client-logo-7.png";
import logo8 from "../Assets/Images/client-logo-8.png";
import logo9 from "../Assets/Images/client-logo-9.png";
import logo10 from "../Assets/Images/client-logo-10.png";
import logo11 from "../Assets/Images/client-logo-11.png";
import logo12 from "../Assets/Images/client-logo-12.png";


const ClientsLogoGrid = () => {
  return (
    <section className='client-grid-container'>

        <div className="client-grid">
            <div className="logo logo-1">
                <img src={logo1} alt="" width={200}/>
            </div>
            <div className="logo logo-2">
            <img src={logo2} alt="" width={200}/>
            </div>
            <div className="logo logo-3">
            <img src={logo3} alt="" width={200}/>
            </div>
            <div className="logo logo-4">
            <img src={logo4} alt="" width={200}/>
            </div>
            <div className="logo logo-5">
            <img src={logo5} alt="" width={200}/>
            </div>
            <div className="logo logo-6">
            <img src={logo6} alt="" width={200}/>
            </div>
            <div className="logo logo-7">
            <img src={logo7} alt="" width={200}/>
            </div>
            <div className="logo logo-8">
            <img src={logo8} alt="" width={200}/>
            </div>
            <div className="logo logo-9">
            <img src={logo9} alt="" width={200}/>
            </div>
            <div className="logo logo-10"><img src={logo10} alt="" width={200}/></div>
            <div className="logo logo-11">
            <img src={logo11} alt="" width={200}/>
            </div>
            <div className="logo logo-12">
            <img src={logo12} alt="" width={200}/>
            </div>
        </div>
    </section>
  )
}

export default ClientsLogoGrid