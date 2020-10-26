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

class App extends React.Component {
  render() {
    return (
      <Suspense fallback="loading">
        <div className="container">
          <Header/>
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
        </div>
      </Suspense>
    
    );
  }
}



export default App;
