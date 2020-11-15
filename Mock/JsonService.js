const path = require("path");
const Mock = require("mockjs");
const jsonServer = require("json-server");
const server = jsonServer.create();
// 模拟数据的路径
const router = jsonServer.router(path.join(__dirname, "db.json"));
// 中间件
const middlewares = jsonServer.defaults();
server.use(middlewares);

// 配置模拟接口
// 1 使用 $1 表示 *。 这样访问 /api/v1/A 相当与访问/A
server.use(
  jsonServer.rewriter({
    "/api/v1/*": "/$1",
    "/api/v2/*": "/v2-$1",
  })
);

// 2 自定义形式 server.post/get
// server.get("/getPageData", (req, res) => {
//   var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     "list|1-10": [
//       {
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         "id|+1": 1,
//       },
//     ],
//   });
//   res.jsonp(data);
// });

// 3 To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  console.log(req.url);
  if (req.method === "POST" || req.url === "/signIn") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
