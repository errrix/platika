import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgAudience from "../audience/images/audience-bg.png";
import audienceMob from "../audience/images/audience-mob.png";

function Audience({t, i18n}) {
    return (
        <div className="audience" style={{backgroundImage: `url(${bgAudience})`}}>
            <a name="audience"></a>
            <div className="audience__content-block">
                <div className="audience__image-block">
                    <img className="audience__image" src={audienceMob} alt="Audience is the main capital"/>
                </div>
                <div className="audience__info">
                    <div className="audience__title">
                        {t("audience.title")}
                    </div>
                    <div className="audience__text">
                        <span>
                            {t("audience.text1")}
                        </span>
                        <span>
                            {t("audience.text2")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(Audience);