import React, { useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithSubRoutes } from "@src/router";
import { signIn, getPageData } from "./service";
import { connect } from "react-redux";
import {
  addNumActionCreator,
  getAsyncDataReduxActionCreator,
} from "./store/actionCreator";

const Home = (props) => {
  const { routes, num, addNum, asyncDataRedux, getAsyncDataRedux } = props;
  const [state, setState] = useState(false);

  const getPageDataFun = async () => {
    const data = await getPageData({
      a: "1",
    });
    return data;
  };

  const handleClick = async () => {
    const data = await signIn({
      name: "linger",
      email: "linger77@gmail.com",
      password: "123",
    });
    console.log(data);
    setState(data.success);
  };

  useEffect(() => {
    // useEffect 里先于异步执行。所以无法获取到data,不能在[]中使用set
    const result = getPageDataFun();
    getAsyncDataRedux();
    console.log(result);
  }, [getAsyncDataRedux]);

  return (
    <div>
      <h1 onClick={handleClick}>Home</h1>

      {state ? <div>123</div> : <div>456</div>}

      <div>
        <p>{num}</p>
        <button onClick={addNum}>点击NUM增加</button>
      </div>

      <div>{asyncDataRedux}</div>

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
