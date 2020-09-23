import React from "react";
import logo from "./source/logo.svg";
import style from "./style.less";

const Common = () => {
  return (
    <div className={style.common}>
      <p> common</p>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Common;
