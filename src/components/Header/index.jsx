import { Link } from 'react-router-dom'
import '../../styles/Header.css';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("header").style.boxShadow = "2px 2px 2px rgb(240, 240, 240)";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.boxShadow = "none";
  }
}

function Header() {

  const downloadCVFile = () => {
    fetch('cv-phil-zieger.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'cv-phil-zieger.pdf';
          alink.click();
      })
  })
  }

  return (
    <header id='header'>
      <div className='portfolio-header-box'>
        <div className='portfolio-header-logo'>
            <span>Phil Zieger</span>
            <span className='portfolio-header-job'>Web developer</span>
        </div>
        <nav>
            <Link className='active' to="#about">Home</Link>
            <a href='#portfolio' title='Portfolio'>Portfolio</a>
            <a href='#skills' title='Skills'>Skills</a>
            <a href='#training' title='Training'>Training</a>
            <button onClick={downloadCVFile} className='portfolio-header-download'>Download CV</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
