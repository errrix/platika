import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgSevens from "../sevens/images/seven-bg.svg";
import sevensPlayer from "../sevens/images/seven-player.png"

function Sevens({t, i18n}) {
    return (
        <div className="sevens" style={{backgroundImage: `url(${bgSevens})`}}>
            <a name="sevens"></a>
            <div className="sevens__content-block">
                <div className="sevens__text-image">
                    <div className="sevens__text-image--image">
                        <img className="sevens__image" src={sevensPlayer} alt="Rugby Europe Sevens"/>
                    </div>
                    <div className="sevens__text-image--text">
                        <h2 className="sevens__title">
                            {t("sevens.title")}
                        </h2>
                        <p className="sevens__text">
                            <span>
                                {t("sevens.text1")}
                            </span>
                            <span>
                                {t("sevens.text2")}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(Sevens);