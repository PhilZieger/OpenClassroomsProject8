import '../../styles/Banner.css';
import { Link } from 'react-router-dom'
import Head from '../../assets/images/profile.jpg';

function Banner() {
  return (
    <section className='portfolio-banner-background'>
        <div className='portfolio-banner'>
            <div className='portfolio-banner-box'>
                <span className='portfolio-banner-title'>Hello, I'm</span>
                <span className='portfolio-banner-name'>Phil Zieger</span>
                <span className='portfolio-banner-job'>A <b className='portfolio-banner-job-work'>Web Developer</b> From <b className='portfolio-banner-job-country'>France</b></span>
                <span className='portfolio-banner-description'>I'm Web Developer based in France, and i'm very passionate and dedicated to my work.</span>
                <div className='portfolio-banner-link-box'>
                    <Link className='portfolio-banner-link-box-button' to="https://www.linkedin.com/in/phil-zieger-186ab6252/">About Me</Link>
                    <div className='portfolio-banner-link-box-icons'>
                    <Link to="https://www.linkedin.com/in/phil-zieger-186ab6252/"><i class="fa-brands fa-linkedin fa-xl"></i></Link>
                    <Link to="/"><i class="fa-solid fa-globe fa-lg"></i></Link>
                    </div>
                </div>
            </div>

            <div className='portfolio-banner-image'>
              <img src={Head} alt="" width="500" height="500"/>
            </div>
            
        </div>
    </section>
  );
}

export default Banner;
<div className='portfolio-banner-line'></div>