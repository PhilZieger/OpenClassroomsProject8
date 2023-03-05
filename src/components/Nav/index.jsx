import React from "react";

function Nav(props) {

  return (
    <div className='portfolio-box-card-menu' id="navFilter">
      <button className="btn selected" onClick={() => props.setFilter("all")}>All</button>
      <button className="btn" onClick={() => props.setFilter(1)}>Basic</button>
      <button className="btn" onClick={() => props.setFilter(2)}>React</button>
      <button className="btn" onClick={() => props.setFilter(3)}>Back-End</button>
      <button className="btn" onClick={() => props.setFilter(4)}>SEO</button>
    </div>
  );
}

export default Nav;
