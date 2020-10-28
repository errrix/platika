import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import imgBg from "./images/img-bg.png"
import bg from "./images/bg.png"
import logo from "./images/rugby_europe_logo.png"


function Final({t, i18n}) {
    return (
        <div className="final">
            <a name="final"></a>
          <div className="final__wrapper">
            <div className="final__content">
              <div className="final__desc">
                {t("final.description")}
              </div>
            </div>
            <div className="final__content bottom">
              <img src={logo} alt="logo"/>
              <h1>
                {t("header.name")}
              </h1>
              <a href="mailto:mail@yashenkov.org">mail@yashenkov.org</a>
            </div>
          </div>
          <a className="final__mail-mob" href="mailto:mail@yashenkov.org">mail@yashenkov.org</a>
          <img className="img-bg ky" src={imgBg} alt="bg"/>
          <img className="img-bg bg" src={bg} alt="bg"/>
          <div className="liner-bg"/>
        </div>
    );
}


export default withTranslation("common")(Final);