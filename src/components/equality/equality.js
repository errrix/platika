import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import stadium from "./images/stadium.png"
import leftMan from "./images/leftman.png"
import rightMan from "./images/rightman.png"

function Equality({t, i18n}) {
    return (
        <div className="equality">
            <a name="equality"></a>
          <div className="equality__content">
              <div className="equality__title">
                {t("equality.title")}
              </div>
              <div className="equality__desc">
               {t("equality.description")}
              </div>
          </div>
          <img className="bg" src={stadium} alt="bg"/>
          <img className="man left" src={leftMan} alt="man"/>
          <img className="man right" src={rightMan} alt="man"/>
        </div>
    );
}


export default withTranslation("common")(Equality);