import "./index.scss";
import bgLogo from "./images/star-top.svg";
import topPhoto from "./images/top-foto.png"
import rugbyLogo from "./images/rugby_europe_logo.png"
import React from "react";

function Header() {
  return (
    <div className="header" style={{backgroundImage: `url(${bgLogo})`}}>
      <div className="content-block">
        <div className="title-block">
          <img src={rugbyLogo} alt=""/>
          <div>
            <h1>Kirill Yashenkov</h1>
            <p>
              Candidate’s Program for the post of President of Rugby Europe
            </p>
          </div>
          
        </div>
      </div>
     
      
      <img src={topPhoto} alt=""/>
    </div>
  );
}



export default Header;