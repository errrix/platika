// import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import Header from "./components/header/header";
import Video from "./components/video/video";
import InterChamp from "./components/interChamp/inter-champ";
import Sevens from "./components/sevens/sevens";

class App extends React.Component {
  render() {
    return (
      <Suspense fallback="loading">
        <div className="container">
          <Header/>
          <Video/>
          <InterChamp/>
          <Sevens/>
        </div>
      </Suspense>
    
    );
  }
}



export default App;
