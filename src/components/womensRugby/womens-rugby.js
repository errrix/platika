import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import womenRugbyTeam from "../womensRugby/images/women-rugby-team.png";

function WomensRugby({t, i18n}) {
    return (
        <div className="womens-rugby">
            <a name="womens-rugby"></a>
            <div className="womens-rugby__content-block">
                <div className="womens-rugby__info">
                   <div className="womens-rugby__title">
                       {t("womens-rugby.title")}
                   </div>
                    <div className="womens-rugby__text">
                        {t("womens-rugby.text")}
                    </div>
                </div>
                <div className="womens-rugby__image-block">
                    <img className="womens-rugby__image" src={womenRugbyTeam} alt="Women’s Rugby"/>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(WomensRugby);