import * as _ from "../utils/tool"
//引入mockjs
const Mock = require('mockjs');
//设置mock响应时间范围为300ms到600ms
Mock.setup({
  timeout: '300-600'
});

//使用mockjs模拟数据
Mock.mock('/api/data', "post", {success: true, data: ['a', 'b']});

Mock.mock("/users/api/userLogin", "post", function (options) {
  /*
   options 含有 url、type 和 body 三个属性
   如果是“get”的话body为null,请求参数放到url后面；“post”的话请求参数以“key=value&key1=value2”的形式存放在body
   */
  let data=_.parseUrlParam(options.body);
  return options;
});
