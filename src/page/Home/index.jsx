import React, { useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithSubRoutes } from "@src/router";
import { signIn, getPageData } from "./service";
import Axios from "axios";

const Home = (props) => {
  const { routes } = props;
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
    console.log(result);
  }, []);

  return (
    <div>
      <p onClick={handleClick}>Home</p>
      {state ? <div>123</div> : <div>456</div>}

      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes {...route} />;
        })}
        <Redirect from="/home" to="/home/page1"></Redirect>
      </Switch>
    </div>
  );
};

export default Home;
