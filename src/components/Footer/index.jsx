import '../../styles/Footer.css';

function Footer() {
  return (
    <footer>
       <div className='portfolio-footer'>
            <div>Developed by <b>Phil Zieger</b> © 2023</div>
            <div>
                <div className='portfolio-footer-nav'>
                    <div className='portfolio-footer-nav-mail'>
                        <i class="fa-solid fa-envelope"></i>
                        <span>|</span>
                        <span><b>phil.zieger.pro@gmail.com</b></span>
                    </div>
                    <div className='portfolio-footer-nav-mail'>
                        <i class="fa-solid fa-phone"></i>
                        <span>|</span>
                        <span><b>06 23 96 56 06</b></span>
                    </div>
                </div>
            </div>
       </div>
    </footer>
  );
}

export default Footer;
