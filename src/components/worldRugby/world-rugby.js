import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgWorldRugby from "../worldRugby/images/bg-world-rugby.png";

function WorldRugby({t, i18n}) {
    return (
        <div className="world-rugby" style={{backgroundImage: `url(${bgWorldRugby})`}}>
            <a name="world-rugby"></a>
            <div className="world-rugby__content-block">
                <div className="world-rugby__info">
                   <div className="world-rugby__title">
                       {t("world-rugby.title")}
                   </div>
                    <div className="world-rugby__text">
                        <span>
                            {t("world-rugby.text1")}
                        </span>
                        <span>
                             {t("world-rugby.text2")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(WorldRugby);