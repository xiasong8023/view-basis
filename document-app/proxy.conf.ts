// 代理配置文件 修改后需重启项目
const SERVER_URL = {
  dev: 'http://172.16.85.110:8087/', // 开发地址
  test1: 'http://localhost:8087/', // 测试地址
};
const PROXY_CONFIG = [
  {
    context: [
      '/api'
    ],
    target: SERVER_URL.dev
  }
];
// @ts-ignore
module.exports = PROXY_CONFIG;
