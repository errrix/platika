import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import TypesBg from "./images/types_bg.png";
import TypesImg from "./images/types_img.png";

function TypesRugby({t, i18n}) {
    return (
        <div className="types-rugby">
            <a name="types-rugby"></a>
          <div className="types-rugby__content">
              <div className="types-rugby__title">
                {t("types_rugby.title")}
              </div>
              <div className="types-rugby__desc">
                <span> {t("types_rugby.text1")}</span>
                <span> {t("types_rugby.text2")}</span>
                <span> {t("types_rugby.text3")}</span>
               
               
               
              </div>
          </div>
          <img className="bg" src={TypesBg} alt="bg"/>
          <img className="tv" src={TypesImg} alt="bg"/>
        </div>
    );
}


export default withTranslation("common")(TypesRugby);