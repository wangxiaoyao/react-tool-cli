import React, { useEffect, useState } from "react";
import { Chart } from "@antv/g2";
// G2和react的融合
const G2Demo = (props) => {
  const { flag, chartData } = props;
  const [chart, setChart] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    const _chart = new Chart({
      container: flag,
      autoFit: true,
      height: 500,
    });

    _chart.data(chartData);
    _chart.scale("sales", {
      nice: true,
    });

    _chart.tooltip({
      showMarkers: false,
    });
    _chart.interaction("active-region");

    _chart.interval().position("year*sales");

    _chart.render();
    setChart(_chart);
  }, [chartData, flag]);

  // 用于数据更新
  useEffect(() => {
    if (chartData[1] === flag) {
      // console.log('更新');
      // console.log('chart', chart);
      chart.changeData(chartData[0]);
    }
  }, [chart, chartData, flag]);
  return <div id={flag}></div>;
};

export default G2Demo;
