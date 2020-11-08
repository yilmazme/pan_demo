import React, { Component } from "react";
import Track from "../apps/Track.js";
import Sugest from "../apps/Sugest.js";
import TopApp from "../apps/TopApp.js";
import Chart from "../apps/Chart.js";
import "./Table.css";
import "./Table1.css";
import GridLayout from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class Table extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  resize = () => this.forceUpdate();

  render() {
    const layout = [
      { i: "a", x: 0, y: 0, w: 2, h: 2 },
      { i: "b", x: 2, y: 0, w: 2, h: 2 },
      { i: "c", x: 0, y: 1, w: 2, h: 2 },
      { i: "d", x: 2, y: 1, w: 2, h: 2 },
    ];
    if (window.innerWidth > 760) {
      return (
        <GridLayout
          className="layout"
          layout={layout}
          cols={4}
          rowHeight={138}
          width={980}
        >
          <div className="home0" key="a">
            <TopApp />
          </div>
          <div className="home1" key="b">
            <Track />
          </div>
          <div className="home2" key="c">
            <Sugest />
          </div>
          <div className="home3" key="d">
            <Chart />
          </div>
        </GridLayout>
      );
    } else if (window.innerWidth <= 760) {
      return (
        <ResponsiveGridLayout
          className="layout"
          layout={layout}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={320}
          width={1000}
        >
          <div className="home0" key="a">
            <TopApp />
          </div>
          <div className="home1" key="b">
            <Track />
          </div>
          <div className="home2" key="c">
            <Sugest />
          </div>
          <div className="home3" key="d">
            <Chart />
          </div>
        </ResponsiveGridLayout>
      );
    }
  }
}

export default Table;
