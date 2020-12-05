import React, { useEffect, useState } from "react";
import G2Demo from "./G2Demo";

// G2和react的融合
const G2_lib = (props) => {
  const flag = "contain";
  const data = [
    { year: "1951 年", sales: 38 },
    { year: "1952 年", sales: 52 },
    { year: "1956 年", sales: 61 },
    { year: "1957 年", sales: 145 },
    { year: "1958 年", sales: 48 },
    { year: "1959 年", sales: 38 },
    { year: "1960 年", sales: 38 },
    { year: "1962 年", sales: 38 },
  ];

  return (
    <div>
      <h1>g2和react的结合</h1>
      <G2Demo flag={flag} chartData={data} />
    </div>
  );
};

export default G2_lib;
