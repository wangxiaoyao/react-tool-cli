# react-tool-cli

依据 create-react-app 创建一个自己的脚手架，以及常见库的使用。有两个分支：

- master：基本框架
- library：常用库使用中

## 主分支： 框架的修改

### 1 依据 create-react-app 脚手架创建项目

npx create-react-app Myapp

### 2 暴露 webpack

npm run eject

### 3 引用路径修改,路径简化

```
alias: {
"@src": path.resolve("src"),
"@component": path.resolve("src/component"),
"@page": path.resolve("src/page"),
"@util": path.resolve("src/util"),
"@service": path.resolve("src/service"),
}
```

### 4 使用 less, localIdentName

> 使用 less 进行 css 的解析。并配置配置 localIdentName 作为 class 的命名规则：就可以实现 class 命名了 在生产环境下修改规则，生成更短的 class 名，可以提高 CSS 的压缩率。选择 base64 的 5 个字符。

1 安装： 由于仅在开发时使用： --save-dev， 发布后的生产不需要
npm install less-loader --save-dev

2 添加 less 解析规则
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

3 Less 解析配置: 注意写在在 file-loader 上面

```
{
test: lessRegex,
exclude: lessModuleRegex,
use: getStyleLoaders(
{
importLoaders: 2,
modules: {
localIdentName: "[path][name]\_\_[local]--[hash:base64:5]",
},
sourceMap: isEnvProduction && shouldUseSourceMap,
},
"less-loader"
),
sideEffects: true,
},
{
test: lessModuleRegex,
use: getStyleLoaders(
{
importLoaders: 2,
sourceMap: isEnvProduction && shouldUseSourceMap,
modules: true,
getLocalIdent: getCSSModuleLocalIdent,
},
"less-loader"
),
},
```

### 5 初始化 css

### 6 配置路由

```
## 基于浏览器开发的router，router文件夹包含基本路由配置。以及路由分配的函数
npm install react-router-dom
```

### 7 server

- 1 package 使用代理进行数据 mock: "proxy": "http://127.0.0.1:3001",

- 2 umi-request 或者 axios 库

umi-request 的配置文件放在 util 中。

### 8 mock:

方案是利用 json-server 真实的模拟后端数据。配置文件在： Mock 中的 server.js

```
## 安装 concurrently
npm install json-server concurrently mockjs--save-dev

##修改 package.json 则使用 npm run start 并发运行前后端
"start": "concurrently 'node scripts/start.js' 'node ./Mock/server.js'",
```

1 数据的随机生成： 详见 mockjs 官网

2 模拟数据使用：

- 1 配置路由： 若是出现 api 地址如下

```
/api/v1/query
/api/v2/query
```

那么我们可以设置 db.json 为 v1-query 和 v2-query。然后

```
"/api/v1/*": "/$1",
"/api/v2/*": "/$1",
```

- 2 post 请求。 在 umiRequest.js 文件中已经设置

注意设置头部 Content-type 为 “application/json”

- 3 自定义 req 和 res 行为

- 4 并行启动 mock 和前端项目

### 9 store 的使用

> 不需要要共享的数据，没必要使用 redux。

```
## redux是核心，react-redux扩展， thunk支持函数
npm install redux react-redux redux-thunk
```
