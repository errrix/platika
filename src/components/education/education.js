import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgEducation from "../education/images/education-bg.png";

function Education({t, i18n}) {
    return (
        <div className="education" style={{backgroundImage: `url(${bgEducation})`}}>
            <a name="educational-platform"></a>
            <div className="education__content-block">
                <div className="education__info">
                   <div className="education__title">
                       {t("education.title")}
                   </div>
                    <div className="education__text">
                            {t("education.text")}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(Education);