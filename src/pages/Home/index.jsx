import '../../styles/Home.css';
import Banner from '../../components/Banner';
import Portfolio from '../../components/Portfolio';
import Skill from '../../components/Skill';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
        <Banner/>
        <Portfolio/>
        <Skill />
        <Footer />
    </div>
  );
}

export default Home;
