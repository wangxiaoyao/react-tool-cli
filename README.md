# react-tool-cli

依据 create-react-app 创建一个自己的脚手架，以及常见库的使用。

## 1 框架的修改

### 1 依据create-react-app 脚手架创建项目
npx create-react-app Myapp

### 2 暴露webpack
npm run eject

### 3 引用路径修改,路径简化
alias: {
  "@src": path.resolve("src"),
  "@component": path.resolve("src/component"),
  "@page": path.resolve("src/page"),
  "@util": path.resolve("src/util"),
  "@service": path.resolve("src/service"),
}

### 4 使用less, localIdentName

> 使用less进行css的解析。并配置配置localIdentName 作为class的命名规则：就可以实现class 命名了 在生产环境下修改规则，生成更短的 class 名，可以提高 CSS 的压缩率。选择base64的5个字符。


// 1 安装
npm install less-loader  --save-dev 

// 1 添加 less 解析规则
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

//2  Less 解析配置:  注意写在在 file-loader 上面

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

### 5 初始css

### 6 配置路由



