import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import Personal from "../assets/personal.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>As a student learning web development, I have found the experience to be both challenging and rewarding. Through hours of self-study and practice, I have gained a solid foundation in the core technologies of HTML, CSS, and JavaScript, as well as the frameworks and libraries used to build dynamic and responsive websites. Along the way, I have also honed my problem-solving skills, as web development requires a great deal of logical thinking and attention to detail. While there have been moments of frustration, especially when encountering tricky bugs or confusing concepts, overall I am passionate about the opportunities that web development offers and determined to continue growing my skills in this field.I am also passionate about hobbies like chess. For me, chess is not just a game, but a way to exercise my mind and engage in strategic thinking.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="personal-img">
                    <img src={Personal} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent