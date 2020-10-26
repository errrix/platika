import "./index.scss";
import bgLogo from "./images/star-top.svg";
import {withTranslation} from 'react-i18next';
import topPhoto from "./images/top-foto.png";
import headerFrame from "./images/header-frame.png";
import rugbyLogo from "./images/rugby_europe_logo.png";
import yashenkovPhoto from "./images/yashenkov.png";
import React from "react";

function Header({t, i18n}) {
    return (
        <div className="header" style={{backgroundImage: `url(${bgLogo})`}}>
            <div className="header__content-block">
                <div className="header__title-block">
                    <div className="header__text-image">
                        <div className="header__rugby-logo">
                            <img src={rugbyLogo} alt="logo"/>
                        </div>
                        <div>
                            <h1 className="header__title">{t("header.name")}</h1>
                            <h2 className="header__subtitle">
                                {t("header.intro")}
                            </h2>
                        </div>
                    </div>
                    <div className="header__button-block">
                        <button onClick={() => i18n.changeLanguage('en')}>En</button>
                        <button onClick={() => i18n.changeLanguage('fr')}>Fr</button>
                        <button onClick={() => i18n.changeLanguage('ru')}>Ru</button>
                        <button onClick={() => i18n.changeLanguage('de')}>De</button>
                        <button onClick={() => i18n.changeLanguage('es')}>Es</button>
                        <button onClick={() => i18n.changeLanguage('it')}>It</button>
                    </div>

                    <div className="header__menu">
                        <div className="header__menu--column-1">
                            <a href="#introduction">{t("header.link1")}</a>
                            <a href="#inter-champ">{t("header.link2")}</a>
                            <a href="#sevens">{t("header.link3")}</a>
                            <a href="#club-rugby">{t("header.link4")}</a>
                            <a href="#">{t("header.link5")}</a>
                            <a href="#">{t("header.link6")}</a>
                            <a href="#">{t("header.link7")}</a>
                            <a href="#">{t("header.link8")}</a>
                        </div>
                        <div className="header__menu--column-2">
                            <a href="#">{t("header.link9")}</a>
                            <a href="#">{t("header.link10")}</a>
                            <a href="#">{t("header.link11")}</a>
                            <a href="#">{t("header.link12")}</a>
                            <a href="#">{t("header.link13")}</a>
                            <a href="#">{t("header.link14")}</a>
                            <a href="#">{t("header.link15")}</a>
                            <a href="#">{t("header.link16")}</a>
                        </div>
                    </div>

                </div>

                <div className="header__image-block">
                    <img src={topPhoto} alt=""/>
                </div>
            </div>

            <div className="header__slanting-line">
                <img src={headerFrame}/>
            </div>

            <div className="header__about" style={{backgroundImage: `url(${yashenkovPhoto})`}}>
                <a name="introduction"></a>
                <p className="header__about-text" >
                    {t("header.about")}
                    <p className="header__about-strong">
                        {t("header.about-strong")}
                    </p>
                    <p className="header__about-signature">
                        {t("header.about-signature")}
                    </p>
                </p>
            </div>
        </div>
    );
}


export default withTranslation("common")(Header);