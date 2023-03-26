import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                 <div>
                    <p>Patras</p>
                    <p>Greece</p>
                 </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                +30 694 29 49 808</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                vasilv34@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Socials</h4>
                <p>You can view my profile by clicking the icons below</p>
                <div className="social">
                <NavLink to="https://www.linkedin.com/in/vasil-vaso-4593b91a5/"><FaLinkedin size={30} style={{color:"white", marginRight:"2rem"}}/></NavLink>
                <NavLink to="https://github.com/VasilVaso"><FaGithub size={30} style={{color:"white", marginRight:"2rem"}}/></NavLink>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer