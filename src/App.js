import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import SearchArea from "./Components/SearchArea/SearchArea";
import Gallery from "./Components/Gallery/Gallery";
import GalleryNavigationBtn from "./Components/GalleryNavigationBtn/GalleryNavigationBtn";

function App() {
  return (
    <div>
      <Navbar/>
      <SearchArea/> 
      <Gallery/>  
      <GalleryNavigationBtn/>   

    </div>
  );
}

export default App;

/*

import React from 'react';
import './GalleryNavigationBtn.css';

function GalleryNavigationBtn() {
  return (
    <div>
      
    </div>
  );
}

export default GalleryNavigationBtn;



*/