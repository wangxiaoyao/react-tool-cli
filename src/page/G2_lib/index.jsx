import React, { useEffect, useState } from "react";
import G2 from "@antv/g2";

// G2和react的融合
const G2_lib = (props) => {
  const { flag, chartData } = props;
  const [chart, setChart] = useState();

  // console.log('flag', flag);
  // console.log('chartData', chartData);

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    const _chart = new G2.Chart({
      container: flag,
      forceFit: true,
      height: 230,
    });
    _chart.source(chartData[0]);
    _chart.scale("value", {
      min: 0,
    });
    _chart.scale("year", {
      range: [0, 1],
    });
    _chart.tooltip({
      crosshairs: {
        type: "line",
      },
    });
    _chart.line().position("year*value");
    _chart.point().position("year*value").size(4).shape("circle").style({
      stroke: "#fff",
      lineWidth: 1,
    });
    _chart.render();
    setChart(_chart);
  }, [chartData, flag]);

  useEffect(() => {
    if (chartData[1] === flag) {
      // console.log('更新');
      // console.log('chart', chart);
      chart.changeData(chartData[0]);
    }
  }, [chart, chartData, flag]);

  return <div id={flag}></div>;
};

export default G2_lib;
