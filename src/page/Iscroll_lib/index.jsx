import React, { useEffect } from "react";
// import IScroll from "iscroll/build/iscroll"; // 普通版
import IScroll from "iscroll/build/iscroll-probe"; // 复杂版
// import IScroll from "iscroll/build/iscroll-infinite";

const Iscroll_lib = () => {
  useEffect(() => {
    console.log("初始化");
    var myScroll = new IScroll("#wrapper", {
      mouseWheel: true,
      scrollbars: true,
      bounce: true,
    });
    myScroll.on("scrollStart", handleStartScroll);
    myScroll.on("scrollEnd", function () {
      if (this.y < -1) {
        console.log("展示");
      }
    });
  }, []);
  const handleStartScroll = () => {
    console.log("开始滚动");
  };
  return (
    <div>
      <h1>下拉功能</h1>
      <div id="wrapper" style={{ height: "100px", overflow: "hidden" }}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li> <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  );
};

export default Iscroll_lib;
