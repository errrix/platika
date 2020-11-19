// import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import Header from "./components/header/header";
import Video from "./components/video/video";
import InterChamp from "./components/interChamp/inter-champ";
import Sevens from "./components/sevens/sevens";
import ClubRugby from "./components/clubRugby/sevens";
import YouthRugby from "./components/youthRugby/youth-rugby";
import WomansRugby from "./components/womensRugby/womens-rugby";
import WorldRugby from "./components/worldRugby/world-rugby";
import Education from "./components/education/education";
import ElectronicData from "./components/electronic-data/electronic-data";
import Audience from "./components/audience/audience";
import SpectatorProgram from "./components/spectator-program/spectator-program";
import Broadcast from "./components/broadcast/broadcast";
import TypesRugby from "./components/types-regby/types-rugby";
import Equality from "./components/equality/equality";
import Reforms from "./components/reforms/reforms";
import Reforms2 from "./components/reforms2/reforms2";
import Final from "./components/final/final";
import Plan from "./components/plan/plan";

import {withTranslation} from 'react-i18next';

const App = ({t, i18n})=> {
    return (
      <Suspense fallback="loading">
        <div className="container">
          <Header/>
          {i18n.language === "en" && <Plan/>}
        
          <Video/>
          <InterChamp/>
          <Sevens/>
          <ClubRugby/>
          <YouthRugby/>
          <WomansRugby/>
          <WorldRugby/>
          <Education/>
          <ElectronicData/>
          <Audience/>
          <SpectatorProgram/>
          <Broadcast/>
          <TypesRugby/>
          <Equality/>
          <Reforms/>
          <Reforms2/>
          <Final/>
        </div>
      </Suspense>
    
    );
}



export default withTranslation("common")(App);
