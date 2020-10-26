import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bg from "./images/bg.png"
import photo from "./images/photo.png"

function Reforms({t, i18n}) {
  return (
    <div className="reforms">
      <a name="reforms"/>
      <div className="reforms__content">
        <div className="reforms__title">
          {t("reforms.title")}
        </div>
        <div className="reforms__desc">
          {t("reforms.description1")}
        </div>
        <div className="reforms__desc">
          {t("reforms.description2")}
        </div>
      </div>
      <img className="bg" src={bg} alt="bg"/>
      <img className="photo" src={photo} alt="man"/>
    </div>
  );
}


export default withTranslation("common")(Reforms);