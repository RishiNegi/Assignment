import React from "react";
import "./About.css"; // Import the CSS file for styling
import first from "../../assets/mission.png"
import  second from "../../assets/vision.png"
import third from "../../assets/final.jpeg"




const About = ({theme, setTheme}) => {
  const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
    

<div className="about-tt-group-containersi">
  
      <div className="about-containersi">
        

        <div className="image-gallery">
        <img src={third} alt="Bridge 1" className="gallery-image" />

        
      </div>
      
      
      <div className="text-containersi">
        <h2 className="section-title">About T and T Group</h2>
        <p className="description">
          T and T Group is the growth story of Mr. Shrimant Tandulkar and Mr.
          Shivram Thorave. It was established in 2004 and later on, T&T Infra
          Ltd. acquired the business of M/s. T&T Group and continued the growth
          of this business under our corporate identity. Our promoters, Mr.
          Shrimant Tandulkar and Mr. Shivram Thorave, have rich experience
          spanning more than 25 years in the infrastructure sector and have
          been instrumental in driving the growth and business strategies of
          our Company.
        </p>
        <p className="description">
          T and T Infra Limited were originally incorporated as a private
          limited company via a Certificate of Incorporation dated September
          28, 2012, under the Companies Act, 1956, in the state of
          Maharashtra, Pune. During our growth phase, our company was converted
          from a private limited company to a public limited company on June 4,
          2018.
        </p>
        <p className="description">
          We are in the business of roads, Flyovers and Bridge construction,
          based out of Pune, Maharashtra. We bid for roads, Flyovers and Bridge
          construction for the State of Maharashtra—Public Works Department
          (PWD), Maharashtra State Road Development Corporation (MSRDC),
          Mumbai Metropolitan Region Development Authority (MMRDA),
          Maharashtra Rural Road Development Authority (MRRDA), Maharashtra
          State Road Transport Corporation (MSRTC), State of Maharashtra—Water
          Resources Department, Pune Municipal Corporation (PMC),
          Pimpri-Chinchwad Municipal Corporation (PCMC), Pimpri-Chinchwad New
          Town Development Authority (PCNTDA), other local bodies in
          Maharashtra and certain real estate developers.
        </p>
      </div>
    </div>
    </div>
       
    <div className="vision-mission-containe">
      <h2 className="section-title">Our Vision & Mission</h2>
      <div className="cards-containe">
        <div className="card">

          <div className="icon">
            <img src={second}alt="Vision Icon"className="icon-img"/>
          </div>

          <h3 className="card-title">Vision</h3>
          <p className="card-text">
            To become a world-class infrastructure facility provider through
            cost-effective structural designs.
          </p>
        </div>
        <div className="card">

          <div className="icon">
            <img src={first}alt="Mission Icon" className="icon-img"/>
          </div>
          
          <h3 className="card-title">Mission</h3>
          <p className="card-text">
            To provide safe and better infrastructure facilities to the Nation
            with quality and durability.
          </p>
        </div>
      </div>
    </div>

      
    
    </>
  );
};

export default About;
