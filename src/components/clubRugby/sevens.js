import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgClubLine from "../clubRugby/images/club-line.svg";
import clubMap from "../clubRugby/images/club-map.png";

function ClubRugby({t, i18n}) {
    return (
        <div className="club-rugby" style={{backgroundImage: `url(${bgClubLine})`}}>
            <a name="club-rugby"></a>
            <div className="club-rugby__content-block">
                <div className="club-rugby__text-image">
                    <div className="club-rugby__text-image--text">
                        <h2 className="club-rugby__title">
                            {t("club-rugby.title")}
                        </h2>
                        <p className="club-rugby__text">
                            <span>
                                {t("club-rugby.text1")}
                            </span>
                            <span>
                                {t("club-rugby.text2")}
                            </span>
                        </p>
                    </div>
                    <div className="club-rugby__text-image--image">
                        <img className="club-rugby__image" src={clubMap} alt="Rugby Europe Sevens"/>
                    </div>
                </div>
                <div className="club-rugby__border-bottom"></div>
            </div>
        </div>
    );
}


export default withTranslation("common")(ClubRugby);