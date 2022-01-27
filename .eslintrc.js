/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-17 11:01:05
 * @LastEditTime: 2022-01-17 11:25:32
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended",],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-unused-vars': [1, {
      'vars': 'all',
      'args': 'none'
    }],
    "no-unreachable": [1], //该规则禁止在 return、throw、continue 和 break 语句后出现不可达代码。
  },
};
