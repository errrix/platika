import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bg from "./images/bg.png"
import stadium from "./images/stadium-reforms.png"

function Reforms2({t, i18n}) {
  return (
    <div className="reforms2">
      <a name="commerce"/>
      <div className="reforms2__content">
        <div className="reforms2__title">
          {t("reforms2.title")}
        </div>
        <div className="reforms2__desc">
          {t("reforms2.description1")}
        </div>
        <div className="reforms2__desc">
          {t("reforms2.description2")}
        </div>
      </div>
      <img className="reforms2__bg" src={bg} alt="bg"/>
      <img className="reforms2__photo" src={stadium} alt="stadium"/>
    </div>
  );
}


export default withTranslation("common")(Reforms2);