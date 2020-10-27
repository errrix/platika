import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgElData from "../electronic-data/images/electronic-data-bg.png";
import macMob from "../electronic-data/images/mac_mob.png";

function ElectronicData({t, i18n}) {
    return (
        <div className="electronic-data" style={{backgroundImage: `url(${bgElData})`}}>
            <a name="electronic-data"></a>
            <div className="electronic-data__content-block">
                <div className="electronic-data__info">
                    <div className="electronic-data__image-block">
                        <img className="electronic-data__image" src={macMob} alt="WORLD RUGBY AND THE INTERCONTINENTAL PARTNERSHIP"/>
                    </div>
                   <div className="electronic-data__title">
                       {t("electronic-data.title")}
                   </div>
                    <div className="electronic-data__text">
                        {t("electronic-data.text")}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(ElectronicData);