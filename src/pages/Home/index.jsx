import '../../styles/Home.css';
import React, { useState, useEffect } from "react"
import Banner from '../../components/Banner';


function Home() {
  return (
    <div>
        <Banner />

        <div className="portfolio-about" id='about'>
            <div className='portfolio-about-title'>
                <h2>About</h2>
            </div>
            <div className='portfolio-about-box'>
                <p>
                Après plusieurs année en tant que technicien informatique, j'ai décidé de changé de vois et de me lancé dans ce qui est ma passion depuis tout petit. J'ai effectué une formation de développeur web chez OpenClassrooms.<br /><br />
                Ayant maintenant terminé ma formation je souhaite mettre à profit mes compétences acquise dans une entreprise en tant que développeur Front-end ou Full-Stack.
                </p>
                <div className='portfolio-about-table'>
                    <div className='portfolio-about-table-content'>
                        <span className='portfolio-about-table-result'>6</span>
                        <span className='portfolio-about-table-answer'>Mois d'éxpérience</span>
                    </div>
                    <div className='portfolio-about-table-content'>
                        <span className='portfolio-about-table-result'>5</span>
                        <span className='portfolio-about-table-answer'>Projet réalisé</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
