import React from "react";
import { Line } from "@ant-design/charts";

const G2Plot_lib = () => {
  const data = [
    { year: "1991", value1: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];
  const config = {
    data,
    height: 500,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };
  return (
    <div>
      <h1>可视化功能</h1>
      <Line {...config} />
    </div>
  );
};

export default G2Plot_lib;
