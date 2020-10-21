import React ,{useState}from 'react';
import './Navbar.css';
// import NavToggleButton from "../NavToggleButton/NavToggleButton"
function Navbar() {

  let [show,setShow] = useState(false);

  const toggleNavBtnDisplay = ()=>{
      setShow(!show)
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className = "container-fluid">
           
              <div className = "nav-IconHolder">
              <i className="fas fa-film"></i>

              <p>Catalog-Z</p>

              </div>
              <div onClick = {toggleNavBtnDisplay}className = "NavToggleButton">
                  <div></div>
                  <div></div>
                  <div></div>
              </div>              
              <div className = "navButtonsHolder">
              <ul id = {show?"show":"notShow"}>
              <li> <p className = "navLink1 active">Photos</p> </li>
              <li> <p className = "navLink2">Videos</p> </li>
              <li> <p className = "navLink3">About</p> </li>
              <li className = "marginRight0"> <p className = "navLink4">Contact</p> </li>
              </ul>
              </div>
            
            </div>
            {/* {false && <NavToggleButton/>} */}
         </nav>

    </div>
  );
}

export default Navbar;
