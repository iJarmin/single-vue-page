'use strict'
const BUILD_ENV = process.env.BUILD_ENV
let baseUrl
switch (BUILD_ENV) {
  case 'test':
    baseUrl = 'http://api.test.com'
    break;
  case 'prod':
    baseUrl = 'http://api.prod.com'
    break;
}
module.exports = {
  NODE_ENV: '"production"',
  BUILD_ENV: '"' + BUILD_ENV + '"',
  baseUrl: '"' + baseUrl + '"',
}
