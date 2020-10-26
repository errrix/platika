import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import interCup from "../interChamp/images/international-cup.png";

function InterChamp({t, i18n}) {
    return (
        <div className="inter-champ">
            <a name="inter-champ"></a>
            <div className="inter-champ__content-block">
                <div className="inter-champ__text-image">
                    <div className="inter-champ__text-image--text">
                        <h2 className="inter-champ__title">
                            {t("inter-champ.title")}
                        </h2>
                        <p className="inter-champ__text">
                            <span>
                                {t("inter-champ.text1")}
                            </span>
                            <span>
                                {t("inter-champ.text2")}
                            </span>
                            <span>
                                {t("inter-champ.text3")}
                            </span>
                        </p>
                    </div>
                    <div className="inter-champ__text-image--image">
                        <img className="inter-champ__image" src={interCup} alt="Rugby Europe International Championships"/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(InterChamp);