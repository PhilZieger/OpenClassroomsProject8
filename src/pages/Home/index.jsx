import '../../styles/Home.css';
import Banner from '../../components/Banner';
import Portfolio from '../../components/Portfolio';
import Skill from '../../components/Skill';
import Formation from '../../components/Formation';

function Home() {
  return (
    <div>
        <Banner/>
        <Portfolio/>
        <Skill />
        <Formation />
    </div>
  );
}

export default Home;
