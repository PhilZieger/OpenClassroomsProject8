import { Link } from 'react-router-dom'
import '../../styles/Header.css';
import Logo from '../../logo.jpg'

function Header() {
  return (
    <header>
        <div>
            <img src={Logo} alt="Logo" width="40" height="40" />
        </div>
        <nav>
            <Link to="#about">A propos</Link>
            <Link to="/">Expertises</Link>
            <Link to="/">Mes travaux</Link>
            <Link to="/">Compétences</Link>
            <Link to="/">Contact</Link>
        </nav>
    </header>
  );
}

export default Header;
