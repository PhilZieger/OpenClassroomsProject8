import '../../styles/Formation.css';
import React from "react";

function Formation() {

  return (
    <div className='portfolio-formation' id='training'>
        <h2>Training</h2>
        <div className='portfolio-formation-content'>
            <div className="portfolio-formation-left">
                <div className="portfolio-formation-left-1">
                <span><b>Lycée Sacrée Coeur Béziers | Bac Pro SEN</b></span>
                <span>Septembre 2014 - Juin 2017</span>
                </div>
            </div>

            <div className="portfolio-formation-center">
            </div>

            <div className="portfolio-formation-right">
                <div className='portfolio-formation-right-1'></div>
                <div className="portfolio-formation-right-2">
                <span><b>OpenClassrooms | Formation Développeur Web</b></span>
                <span>Décembre 2022 - Juin 2023</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Formation;