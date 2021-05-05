import React, { useState } from "react";
import { NavLink, Container, fluid, Col, Row } from "react-bootstrap";



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar" id="home">
        <div className="nav-container">

            {/*++++++++++++++++++  LOGO +++++++++++++++++++++++++++*/}
          <NavLink     href="/"  className="nav-logo">
            <img src="./img/logo.png" width="60px" height="60px" />
          </NavLink>

  {/*++++++++++++++++++  NAVBAR BUTTON +++++++++++++++++++++++++++*/}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
               href="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              href="/#search"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                LIST RECIPE 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                href="/Favorite"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                MY FAVORITES
              </NavLink>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>


        {/*++++++++++++++++++  HOME  +++++++++++++++++++++++++++*/}


  
    </>
  );
}
export default NavBar;