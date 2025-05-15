import React from 'react'
import '../css/about.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div>
        <Navbar/>
        <div class="about">
          <h1>About.</h1><br/>
          <div class="about-para">
          <p>We are one of the leading Event Management & Wedding Planning companies in India. We are EventEase and we celebrate your love, romance, success, money, health & wellbeing. By organizing powerful & unforgettable celebrations & events. We create your D-day, the best day and the best memory ever!</p>
          </div>
        </div>
       <div class="img-section">
          <div class="img1">
              <img class="img-about" src="/images/bday.jpg"/>
          </div>
          <div class="img1">
              <img class="img-about" src="/images/download.jpg"/>
          </div>
          <div class="img1">
              <img class="img-about" src="/images/images.jpg"/>
          </div>
        </div>
        <div class="about-sec2">
          <div class="about1">
              <input class="input" type="TEXT" placeholder="VISION"/><br/>
              <h1>Driven By A Good Vision</h1><br/><br/>
              <p>Our vision is to establish ourselves as the foremost event management company in India, dedicated to crafting experiences that etch cherished memories into the tapestry of your life. We aspire to create impactful and transformational events that not only celebrate your success but also translate it into tangible value. Our commitment is to consistently meet and exceed your expectations, fueled by a combination of excellent ideas and flawless execution. We envision a future where every event we undertake becomes a milestone in your journey, leaving an indelible mark on your memory lane that lasts a lifetime.</p>
          </div>
          <div class="about-img">
              <img class="img" src="/images/Frame-2.png"/>
          </div>
      </div>

      <div class="about-sec3">
          <div class="about-img">
              <img class="img" src="/images/Frame-3.png"/>
          </div>
          <div class="about1">
          <input class="input"type="text" placeholder="WORK"/><br/>
          <h1>What We Do?</h1><br/><br/>
          <p>We specialize in creating award-winning events, positioning ourselves among the top event planning companies in the country. As your comprehensive event planner, we serve as your go-to resource for all your significant occasions. Our approach involves starting from scratch, meticulously crafting a unique blueprint tailored to your specific needs. With our unwavering commitment, we provide 24/7 assistance to ensure every detail is seamlessly executed. Our overarching mission is to transform your dream into a reality, making your aspirations our guiding purpose in every event we undertake</p>
           </div>
      </div>
      
      <div class="about-footer">
          <h1>Looking for a collaboration?</h1>
          <button class="btn1"><Link to="/Contact">Let’s talk — Send a message</Link></button>
      </div>
    </div>
  )
}
