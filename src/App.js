import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import SearchArea from "./Components/SearchArea/SearchArea";
import Gallery from "./Components/Gallery/Gallery";
import GalleryNavigationBtn from "./Components/GalleryNavigationBtn/GalleryNavigationBtn";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <SearchArea/> 
      <Gallery/>  
      <GalleryNavigationBtn/>   
      <Footer/>
    </div>
  );
}

export default App;

/*

import React from 'react';
import './FooterRight.js.css';

function FooterRight.js() {
  return (
    <div>
      
    </div>
  );
}

export default FooterRight.js;



*/