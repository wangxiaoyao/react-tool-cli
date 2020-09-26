import { extend } from "umi-request";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};
/**
 * 异常处理程序
 */

const errorHandler = (error) => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  const { status, url } = response;
  alert(`${errortext},请求错误 ${status}: ${url}`);
  if (status === 401) {
    alert("未登录或登录已过期，请重新登录。");
  } // environment should not be used
};

const request = extend({
  credentials: "include", // 默认请求是否带上cookie
  // 前缀
  // prefix: "/api/v1",
  // 后缀
  // suffix: ".json",
  // 超时
  // timeout: 100000,
  // 头部信息
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  // 默认参数
  // params: {
  //   token: "xiaoyao", // 所有请求默认带上 token 参数
  // },
  // 异常处理
  errorHandler,
});

// 拦截器
request.interceptors.request.use((url, options) => {
  const data = {
    url,
    options: {
      ...options,
    },
  };
  if (data.options.method.toUpperCase() === "POST") {
    data.options.data = {
      tntInstId: "MYBKC1CN",
      ...(data.options.data || {}),
    };
  }
  if (data.options.method.toUpperCase() === "GET") {
    data.options.params = {
      tntInstId: "MYBKC1CN",
      ...(data.options.params || {}),
    };
  }
  return data;
});

export default async (...rest) => {
  const res = await request(...rest);
  // 这里是用来对某一个项目进行定制。所有data之外的判断写在此处
  // 本地进行模拟延迟：
  // console.log(process);
  // if (process.ISLOCAL) {
  //   await new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 300);
  //   });
  // }
  // if (res && res.code === 0) {
  //   return res.data || "成功";
  // }
  // return null;
  return res;
};

export { request as baseRequest };
