import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <form  className = "searchForm" onSubmit={(e) => props.formSubmitHandler(e)}>
      <input className="search search-input" placeholder="Search" type="search" />
      <button className="search search-btn">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchForm;
