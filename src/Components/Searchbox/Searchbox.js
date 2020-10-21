import React from "react";
import "./Searchbox.css";
import imgBackground from "../../Images/hero.jpg";
function Searchbox() {
  const formSubmitHandler = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="search-wraper">
      <img src={imgBackground}></img>
      <form onSubmit = {(e)=>formSubmitHandler(e)}>
        <input className="search search-input" placeholder = "Search" type="search" />
        <button className = "search search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Searchbox;
