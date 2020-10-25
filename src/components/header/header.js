import "./index.scss";
import bgLogo from "./images/star-top.svg";
import { withTranslation } from 'react-i18next';
// import topPhoto from "./images/top-foto.jpg"
import rugbyLogo from "./images/rugby_europe_logo.png"
import React from "react";

function Header({ t, i18n }) {
    return (
      <div className="header" style={{backgroundImage: `url(${bgLogo})`}}>
        <div className="content-block">
          <div className="title-block">
            <img src={rugbyLogo} alt=""/>
            <div>
              <h1>{t("header.name")}</h1>
              <p>
                {t("header.intro")}
              </p>
            </div>
        
          </div>
        </div>
        <div className="button-block">
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
        </div>
      
        {/*<img src={topPhoto} alt=""/>*/}
      </div>
    );
}



export default  withTranslation("common")(Header);