import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgSpectator from "../spectator-program/images/spectator-bg.png";

function SpectatorProgram({t, i18n}) {
    return (
        <div className="spectator-program" style={{backgroundImage: `url(${bgSpectator})`}}>
            <a name="spectator-program"></a>
            <div className="spectator-program__content-block">
                <div className="spectator-program__info">
                   <div className="spectator-program__title">
                       {t("spectator-program.title")}
                   </div>
                    <div className="spectator-program__text">
                        <span>
                            {t("spectator-program.text1")}
                        </span>
                        <span>
                            {t("spectator-program.text2")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(SpectatorProgram);