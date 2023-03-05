import '../../styles/Skill.css';
import computer from '../../assets/images/computer.png';

function Skill() {
  return (
    <div className='portfolio-skill-base' id='skills'>
        <div className='portfolio-skill'>
            <h2>I Develop Skills Regularly to Keep Me Update</h2>
            <span className='portfolio-skill-description'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</span>

            <div className='progressbar-box'>
                <div className='progressbar-box-title'>
                    <span className='progressbar-box-title-text'>HTML-CSS</span>
                    <span className='progressbar-box-title-progression'>80%</span>
                </div>
                <div class="progressbar-wrapper">
                    <div title="html" class="progressbar"></div>
                </div>
            </div>

            <div className='progressbar-box'>
                <div className='progressbar-box-title'>
                    <span className='progressbar-box-title-text'>JAVASCRIPT</span>
                    <span className='progressbar-box-title-progression'>70%</span>
                </div>
                <div class="progressbar-wrapper">
                    <div title="javascript" class="progressbar"></div>
                </div>
            </div>

            <div className='progressbar-box'>
                <div className='progressbar-box-title'>
                    <span className='progressbar-box-title-text'>REACT</span>
                    <span className='progressbar-box-title-progression'>70%</span>
                </div>
                <div class="progressbar-wrapper">
                    <div title="react" class="progressbar"></div>
                </div>
            </div>

            <div className='progressbar-box'>
                <div className='progressbar-box-title'>
                    <span className='progressbar-box-title-text'>NODEJS-EXPRESS</span>
                    <span className='progressbar-box-title-progression'>50%</span>
                </div>
                <div class="progressbar-wrapper">
                    <div title="node" class="progressbar"></div>
                </div>
            </div>

            <div className='progressbar-box'>
                <div className='progressbar-box-title'>
                    <span className='progressbar-box-title-text'>MYSQL-SQL</span>
                    <span className='progressbar-box-title-progression'>90%</span>
                </div>
                <div class="progressbar-wrapper">
                    <div title="sql" class="progressbar"></div>
                </div>
            </div>
        </div>

        <div>
            <img src={computer} alt="" width="700" height="560" />
        </div>
    </div>
  );
}

export default Skill;