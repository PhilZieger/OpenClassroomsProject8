import React from "react";

function Nav(props) {

  return (
    <div className='portfolio-box-card-menu'>
      <button onClick={() => props.setFilter("all")}>All</button>
      <button onClick={() => props.setFilter(1)}>Basic</button>
      <button onClick={() => props.setFilter(2)}>React</button>
      <button onClick={() => props.setFilter(3)}>Back-End</button>
      <button onClick={() => props.setFilter(4)}>SEO</button>
    </div>
  );
}

export default Nav;
