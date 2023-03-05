import '../../styles/Banner.css';
import { Link } from 'react-router-dom'
import Head from '../../assets/images/profile.jpg';
import React from '../../assets/images/react.webp';
import JavaScript from '../../assets/images/JavaScript.png';

function Banner() {
  return (
    <section className='portfolio-banner-background'>
        <div className='portfolio-banner'>
            <div className='portfolio-banner-box'>
                <span className='portfolio-banner-title'>Hello, I'm</span>
                <span className='portfolio-banner-name'>Phil Zieger</span>
                <span className='portfolio-banner-job'>A <span className='portfolio-banner-job-work'>Web Developer</span> From <span className='portfolio-banner-job-country'>France</span></span>
                <span className='portfolio-banner-description'>I'm Web Developer based in France, and i'm very passionate and dedicated to my work.</span>
                <div className='portfolio-banner-link-box'>
                    <Link className='portfolio-banner-link-box-button' to="https://github.com/PhilZieger">About Me</Link>
                    <div className='portfolio-banner-link-box-icons'>
                    <Link to="https://github.com/PhilZieger"><i class="fa-brands fa-github fa-xl"></i></Link>
                    <Link to="https://www.linkedin.com/in/phil-zieger-186ab6252/"><i class="fa-brands fa-linkedin fa-xl"></i></Link>
                    <Link to="/"><i class="fa-solid fa-globe fa-lg"></i></Link>
                    </div>
                </div>
            </div>

            <div className='portfolio-banner-image'>
              <img src={Head} alt="Profil" width="500" height="500"/>
              <img className='portfolio-banner-image-react' src={React} alt="React"  width="75" height="75"/>
              <img className='portfolio-banner-image-javascript' src={JavaScript} alt="JavaScript"  width="75" height="75"/>
            </div>
            
        </div>
    </section>
  );
}

export default Banner;
<div className='portfolio-banner-line'></div>