import "./index.scss";
import React, {Component} from "react";
import bgVl from "../video/images/video-line.png";
import playVideo from "../video/images/video-img.png";
import { withTranslation } from 'react-i18next';

class  Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false
    };
  }
  playVideoHandler = () => {
    this.setState({
      showVideo: true
    });
  }
  
  render() {
    return (
      <div className="video" style={{backgroundImage: `url(${bgVl})`}}>
        <div className="video__content-block">
          <div className="video__play-video">
            {!this.state.showVideo &&
                <div className="video__condition">
                  <p className="video__title">
                    {this.props.t('header.about-strong')}
                  </p>
                  <img className="video__play-video--image"
                       src={playVideo}
                       onClick={this.playVideoHandler}
                       alt="play"/>
                </div>
            }
            {this.state.showVideo &&
            <iframe className="iframe" width="630" height="400" src="https://www.youtube.com/embed/IdwLbtYlkSA?&autoplay=1" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("common")(Video);
