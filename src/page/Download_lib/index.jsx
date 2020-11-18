import React from "react";
import { downloadTableToExcel } from "./util";
import data from "./data";

const Download_lib = () => {
  const handleClickDownLoad = () => {
    downloadTableToExcel(data);
  };
  return (
    <div>
      <h1>下载功能</h1>
      <button onClick={handleClickDownLoad}>点击下载数据到Excel</button>
    </div>
  );
};

export default Download_lib;
