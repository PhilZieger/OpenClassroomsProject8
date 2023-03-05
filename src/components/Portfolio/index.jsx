import '../../styles/Portfolio.css';
import { useState } from "react";
import Nav from "../Nav";

const Works = [
    {
        id: "ghfd654",
        image: "booki",
        alt: "Booki",
        category: 1,
    },
    {
        id: "1fg45ds4",
        image: "architect",
        alt: "Sophie Bluel Architect D'interieur",
        category: 1,
    },
    {
        id: "g156ds65g",
        image: "NinaCarducci",
        alt: "Nina Carducci photographie",
        category: 4,
    },
    {
        id: "h56dfg14",
        image: "Kasa",
        alt: "Kasa",
        category: 2,
    },
    {
        id: "j1568fgh6",
        image: "Grimoire",
        alt: "Mon Vieux Grimoire",
        category: 3,
    },
];


function Portfolio() {
    const [filter, setFilter] = useState("all");

    function filterTags(val) {
        setFilter(val);
    }

    var btns = document.getElementsByClassName("btn");
    
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace("selected", "");
        this.className = "btn selected";
        });
    }

  return (
    <div className='portfolio-box' id='portfolio'>
        <div className='portfolio-box-text'>
            <h2>Portfolio</h2>
            <span>Most common methods for designing websites that work well on desktop is responsive and adaptive design</span>
        </div>
        <div className='portfolio-box-card'>
            <Nav filter={filter} setFilter={filterTags} />
            <div className='portfolio-box-card-content'>

            {Works.map((x, i) =>
                filter === x.category || filter === "all" ? (
                    <div className='portfolio-box-card-content-in' key={x.id}>
                        <img src={require('../../assets/portfolio/' +
                        x.image +
                        '.PNG')} alt={x.alt} />
                    </div>
                ) : null
            )}

            </div>
        </div>
    </div>
  );

  
}

export default Portfolio;
