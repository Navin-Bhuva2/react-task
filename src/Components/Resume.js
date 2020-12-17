import React, { Component } from 'react';
import  ZsTabs  from "../module/component/tabs/zsTabs";
import { Tab } from "react-bootstrap";
import First from "./img/tabcompo/first/first";
import Second from "./img/tabcompo/second/second";
import Third from "./img/tabcompo/third/third";
import Collaspe from "./collapse";

class Resume extends Component {
  state = {
    activeTab: "0",
  };
  setActiveTab = t => {
    if (t !== "addNewDash") {
      this.setState({ activeTab: t });
    } else {
      alert("add new dash");
    }
  };
  render() {
    const { activeTab } = this.state;
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">

          <div >
        <ZsTabs style={{display: "block", marginLeft: "auto", marginRight: "auto"}} activeTab={activeTab} setActiveTab={this.setActiveTab}>
          <Tab title="BMW" eventKey={0}>
            {activeTab === "0" ? <First /> : null}
          </Tab>
          <Tab title="AUDI" eventKey={1}>
            {activeTab === "1" ? <Second /> : null}
          </Tab>
          <Tab title="Lembo" eventKey={2}>
            {activeTab === "2" ? <Third /> : null}
          </Tab>
        </ZsTabs>
        </div>

        </div>



         



        <div className="row skill">

          <div className="three columns header-col">
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
            
          </div>
          {/* <Collaspe/> */}
        </div>
      </section>
    );
  }
}

export default Resume;
