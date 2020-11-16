import React, { useEffect } from "react";
import RouteView from "@router/RouteView";
import { signIn } from "./service/service";
import { connect } from "react-redux";
import {
  addNumActionCreator,
  getAsyncDataReduxActionCreator,
} from "./store/actionCreator";

const Home = (props) => {
  const { routers, num, addNum, asyncDataRedux, getAsyncDataRedux } = props;

  const handleClick = async () => {
    const data = await signIn({
      name: "linger",
      email: "linger77@gmail.com",
      password: "123",
    });
    console.log(data);
  };

  useEffect(() => {
    getAsyncDataRedux();
  });

  return (
    <div>
      <h1>Home</h1>

      <h1 onClick={handleClick}> 1 点击异步获取signIn接口</h1>

      <div>
        <button onClick={addNum}>2 点击NUM增加</button>
        <p>{num}</p>
      </div>

      <div>3 {asyncDataRedux}</div>

      <div>
        <h1>路由子元素</h1>
        <RouteView routers={routers}></RouteView>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    num: state.Home.num,
    asyncDataRedux: state.Home.asyncDataRedux,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNum() {
      dispatch(addNumActionCreator());
    },
    getAsyncDataRedux() {
      dispatch(getAsyncDataReduxActionCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
