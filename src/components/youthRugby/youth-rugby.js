import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgYouthRugby from "../youthRugby/images/bg-youth-rugby.png";
import youthRugbyTeam from "../youthRugby/images/youth-rugby-team.png";

function YouthRugby({t, i18n}) {
    return (
        <div className="youth-rugby" style={{backgroundImage: `url(${bgYouthRugby})`}}>
            <a name="youth-rugby"></a>
            <div className="youth-rugby__content-block">
                <div className="youth-rugby__info">
                   <div className="youth-rugby__title">
                       {t("youth-rugby.title")}
                   </div>
                    <div className="youth-rugby__text">
                        {t("youth-rugby.text1")}
                    </div>
                    <div className="youth-rugby__text">
                        {t("youth-rugby.text2")}
                    </div>
                </div>
                <div className="youth-rugby__image-block">
                    <img className="club-rugby__image" src={youthRugbyTeam} alt="Youth RUGBY"/>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(YouthRugby);