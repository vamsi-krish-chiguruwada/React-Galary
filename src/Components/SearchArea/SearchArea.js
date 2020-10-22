import React from "react";
import "./SearchArea.css";
import imgBackground from "../../Images/hero.jpg";
import SearchForm from "../SearchForm/SearchForm";


function Searchbox() {
  const formSubmitHandler = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="search-wraper">
      <img src={imgBackground}></img>
      <SearchForm formSubmitHandler={formSubmitHandler}/>
    </div>
  );
}

export default Searchbox;
