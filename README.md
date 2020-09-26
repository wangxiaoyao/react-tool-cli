# react-tool-cli

依据 create-react-app 创建一个自己的脚手架，以及常见库的使用。

## 主分支： 框架的修改

### 1 依据 create-react-app 脚手架创建项目

npx create-react-app Myapp

### 2 暴露 webpack

npm run eject

### 3 引用路径修改,路径简化

alias: {
"@src": path.resolve("src"),
"@component": path.resolve("src/component"),
"@page": path.resolve("src/page"),
"@util": path.resolve("src/util"),
"@service": path.resolve("src/service"),
}

### 4 使用 less, localIdentName

> 使用 less 进行 css 的解析。并配置配置 localIdentName 作为 class 的命名规则：就可以实现 class 命名了 在生产环境下修改规则，生成更短的 class 名，可以提高 CSS 的压缩率。选择 base64 的 5 个字符。

// 1 安装： 由于仅在开发时使用： --save-dev， 发布后的生产不需要
npm install less-loader --save-dev

// 1 添加 less 解析规则
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

//2 Less 解析配置: 注意写在在 file-loader 上面

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

### 5 初始 css

### 6 配置路由

```
## 基于浏览器开发的router
react-router-dom

## router文件夹包含所有的路由配置。以及路由分配的函数
```

### 7 server

- 1 package 使用本地作为代理: "proxy": "http://127.0.0.1/",

- 2 umi-request 或者 axios 库

umi-request 的配置文件放在 util 中： 我这里约定后端：

```
code: 0是成功 1是失败
data: 获取到的数据
msg: 反馈信息
```

### 8 mock:

方案：利用 json-server 真实的模拟后端数据，concurrently 并发的启动前端和后端

```
## 生成数据
yarn add mockjs --save-dev

## 库
npm install json-server concurrently --save-dev
```

1 数据的随机生成： 详见 mockjs 官网

2 使用

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

- 2 post 请求

注意设置头部 Content-type 为 “application/json”

- 3 自定义 req 和 res

- 4 并行启动 mock 和前端项目

```
##package.json
"start": "concurrently 'node scripts/start.js' 'node ./Mock/server.js'",
```

### 9 store 的使用

> 不需要要共享的数据，没必要使用redux。 

```
## redux是核心，react-redux扩展， thunk支持函数
npm install redux react-redux redux-thunk
```
