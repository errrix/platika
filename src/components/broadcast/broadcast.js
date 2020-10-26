import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import broadcastBg from "./images/broadcast_bg.png";
import broadcastTv from "./images/broadcast_tv.png";

function Broadcast({t, i18n}) {
    return (
        <div className="broadcast">
            <a name="broadcast"></a>
          <div className="broadcast__content">
            <div>
              <div className="broadcast__title">
                {t("broadcast.title")}
              </div>
              <div className="broadcast__desc">
                {t("broadcast.description")}
              </div>
            </div>
          </div>
          <img className="bg" src={broadcastBg} alt="bg"/>
          <img className="tv" src={broadcastTv} alt="broadcast tv"/>
        </div>
    );
}


export default withTranslation("common")(Broadcast);