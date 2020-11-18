import React from "react";
import GridLayout from "react-grid-layout";
import styles from "./style.less";

class GridLayout_lib extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <div>
        <h1>页面拖拽</h1>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div className={styles.box} key="a">
            a
          </div>
          <div className={styles.box} key="b">
            b
          </div>
          <div className={styles.box} key="c">
            c
          </div>
        </GridLayout>
      </div>
    );
  }
}

export default GridLayout_lib;
