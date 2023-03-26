import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/img1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className= "into-img" src={IntroImg} alt="IntroImg"></img>  
        </div>
        <div className="content">
            <p>I love designing and coding on the web</p>
            <h1>Hello</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg