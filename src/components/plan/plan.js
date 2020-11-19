import "./index.scss";
import {withTranslation} from 'react-i18next';
import React from "react";

function Plan({t, i18n}) {
    return (
        <div className="plan">
          <div className="container">
            <h2>I plan to focus my attention on these key areas:
            </h2>
            <div className="list-container">
              <ul className="outer-list">
                <li>
                  <span className="number">1</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>
                      Rugby Europe International Championships
                      Key Points
                    </h4>
                    <ul>
                      <li>
                        Modernize Rugby Europe International Championships
                      </li>
                      <li>
                        Support the improvement of competition standards to enhance development
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">2</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Rugby Europe Sevens Key Points</h4>
                    <ul>
                      <li>Rebrand and remodel Rugby Europe Sevens</li>
                      <li> Create a more modern and dynamic tournament series</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">3</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Rugby Europe Sevens Key Points</h4>
                    <ul>
                      <li>Introduce interregional clusters to grow club rugby across Europe
                      </li>
                      <li>   Create new continental tournament featuring strongest clubs in tier 2 nations</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">4</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Youth Rugby Key Points</h4>
                    <ul>
                      <li>Increase opportunities for young players to gain greater international experience
                      </li>
                      <li> Expand European Youth Championships</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">5</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Women’s Rugby Key Points</h4>
                    <ul>
                      <li>Develop and grow women's rugby across Europe
                      </li>
                      <li> Empower more women to play a key role in all areas of the sport</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="outer-list">
                <li>
                  <span className="number">6</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>World Rugby and the Intercontinental partnership Key Points</h4>
                    <ul>
                      <li>Strengthen ties with World Rugby
                      </li>
                      <li> Increase collaboration with other continental associations</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">7</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Educational platform Key Points</h4>
                    <ul>
                      <li>Create new, targeted educational programs
                      </li>
                      <li> Launch online education platform in 2021</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">8</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Electronic database Key Points</h4>
                    <ul>
                      <li>Harness the power of our data for the benefit of the sport</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">9</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Audience is the main capital Key Points</h4>
                    <ul>
                      <li>Drive new audiences to the sport through engaging online content</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">10</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Spectator’s program Key Points</h4>
                    <ul>
                      <li>Enhance spectator experience
                      </li>
                      <li>Increase support for host countries</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="outer-list">
                <li>
                  <span className="number">11</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Broadcasts are the key to engagement
                      Key Points</h4>
                    <ul>
                      <li>Launch Rugby Europe OTT platform
          
                      </li>
                      <li>Develop partnerships with world-leading broadcasters</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">12</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Non-contact rugby, beach rugby,
                      snow rugby Key Points</h4>
                    <ul>
                      <li>Grow audience through increasing non-contact rugby opportunities across Europe
                      </li>
                      <li>Attract new players and fans through developing snow and beach rugby</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">13</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>EqualityKey Points</h4>
                    <ul>
                      <li>Ensure Rugby Europe is a strong advocate for equality and anti-discrimination</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">14</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Organizational reform Key Points</h4>
                    <ul>
                      <li>Build a team of industry experts
          
                      </li>
                      <li>Improve dialogue between Rugby Europe and the national unions</li>
                      <li> Create targeted strategies for each region</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="number">15</span>
      
                  <div className="content-container">
                    <div className="separator"/>
                    <h4>Commerce Key Points</h4>
                    <ul>
                      <li>Revolutionize Rugby Europe's commercial strategy
                      </li>
                      <li>  Protect players through partnering with world-leading insurance companies</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
}


export default withTranslation("common")(Plan);