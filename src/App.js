import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Searchbox from "./Components/Searchbox/Searchbox";
import Gallery from "./Components/Gallery/Gallery"
function App() {
  return (
    <div>
      <Navbar/>
      <Searchbox/> 
      <Gallery/>     

    </div>
  );
}

export default App;
