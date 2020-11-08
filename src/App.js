import React, { Component } from "react";
import "./App.css";
import BasicLayout from "./comps/table/Table";
import MENU from "./dashboardImages/dashboardMenuIcon.png";
import LOGO from "./dashboardImages/logo.png";
import OPEN from "./comps/apps/appicons/whiteArrow.png";
import CLOSE from "./comps/apps/appicons/left.png";

class App extends Component {
  state = {
    toggle: true,
  };

  toggleView = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    //const { see } = this.state;
    return (
      <div className="main">
        <nav className="navbar">
          <img className="logo" src={LOGO} alt="logo" />
          <span>
            <img
              className="menu"
              src={MENU}
              alt="menu"
              onClick={this.toggleView}
            />
            <img
              className="arrow"
              src={this.state.toggle ? CLOSE : OPEN}
              alt="arrow"
            />
          </span>
        </nav>
        <div className="dashboard">
          <h2>Dashboard</h2>
          {this.state.toggle ? (
            <div>
              <BasicLayout />
            </div>
          ) : (
            <div className="warning">
              Nothing to see here.<br></br>
              But if you are the data supplier you should know that I added a
              number to the name of each app to make 10 distinct apps so that
              chart could render all of them.
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
