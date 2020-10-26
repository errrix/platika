import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";
import bgVl from "../video/images/video-line.png";
import playVideo from "../video/images/video-img.png";

function Video({t, i18n}) {
    return (
        <div className="video" style={{backgroundImage: `url(${bgVl})`}}>
            <div className="video__content-block">
                <div className="video__play-video">
                    <img className="video__play-video--image" src={playVideo} alt="play"/>
                </div>
            </div>
        </div>
    );
}


export default withTranslation("common")(Video);