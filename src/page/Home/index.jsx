import React, { useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithSubRoutes } from "@src/router";
import { signIn } from "./service";
import { connect } from "react-redux";
import {
  addNumActionCreator,
  getAsyncDataReduxActionCreator,
} from "./store/actionCreator";

const Home = (props) => {
  const { routes, num, addNum, asyncDataRedux, getAsyncDataRedux } = props;

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
  }, [getAsyncDataRedux]);

  return (
    <div>
      <p>Home</p>
      <h1 onClick={handleClick}> 1 点击异步获取signIn接口</h1>

      <div>
        <button onClick={addNum}>2 点击NUM增加</button>
        <p>{num}</p>
      </div>

      <div>3 {asyncDataRedux}</div>

      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes {...route} />;
        })}
        <Redirect from="/home" to="/home/page1"></Redirect>
      </Switch>
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
