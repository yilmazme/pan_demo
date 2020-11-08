import React, { Component } from "react";
import appSuggestions from "./suggestedApp";
import UP from "./appicons/up.png";
import DOWN from "./appicons/down.png";
import STAR0 from "./appicons/grayStar.png";
import STAR1 from "./appicons/yellowStar.png";
import "./Track.css";

class Sugest extends Component {
  render() {
    return (
      <div className="table-container">
        <h3 style={{ marginLeft: "50px" }}>App Suggestions</h3>

        {appSuggestions.map((value, idx) => {
          return (
            <div className="row" key={value.id}>
              <div className="index">
                <b>{value.rank}</b>
              </div>
              <div className="icon">
                <img src={value.iconName} alt="icon" width="50px" />
              </div>
              <div className="info-container">
                <div className="info">
                  <b>{value.name}</b>
                  <br />
                  <img
                    className="flag"
                    src={value.country}
                    alt="country"
                    width="20px"
                  />{" "}
                  <i>{value.publisher}</i>{" "}
                  <img
                    src={value.rating > 0 ? STAR1 : STAR0}
                    alt="star"
                    width="10px"
                  />
                  <img
                    src={value.rating > 1 ? STAR1 : STAR0}
                    alt="star"
                    width="10px"
                  />
                  <img
                    src={value.rating > 2 ? STAR1 : STAR0}
                    alt="star"
                    width="10px"
                  />
                  <img
                    src={value.rating > 3 ? STAR1 : STAR0}
                    alt="star"
                    width="10px"
                  />
                  <img
                    src={value.rating > 4 ? STAR1 : STAR0}
                    alt="star"
                    width="10px"
                  />{" "}
                </div>
              </div>
              <div
                className="statu"
                style={{ color: value.progress > 0 ? "green" : "red" }}
              >
                <b>{value.progress}</b>{" "}
                <img
                  src={value.progress > 0 ? UP : DOWN}
                  alt="statuspng"
                  width="16px"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sugest;
