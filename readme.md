# feq-cli

[![NPM Version](https://img.shields.io/github/stars/Chef5/feq-cli)](https://img.shields.io/github/stars/Chef5/feq-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/feq-cli.svg?style=flat)](https://npmcharts.com/compare/feq-cli?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=feq-cli)](https://packagephobia.now.sh/result?p=feq-cli)

Front End Questions cli

前端面试问题命令行工具，随机来一题考考自己

## Install

``` sh
npm install -g feq-cli
```

## Usage

``` sh
feq  r [options]     random 随机一题(默认)
feq  q <id>          question 查看题目
feq  a <id>          answer 查看答案
feq  type            显示类型列表
feq  help [command]  显示帮助
```

## Examples

- 随机一题

  command:

  ``` sh
  feq
  ```

  response:

  ``` sh
  Q: 什么是防抖和节流，他们的应用场景有哪些

  Answer：
    feq a 2

  Url：
    https://q.shanyue.tech/fe/js/3.html
  ```

- 随机react类型题目

  command:

  ``` sh
  feq -t react
  ```

  response:

  ``` sh
  Q: React 中监听 input 的 onChange 事件的原生事件是什么

  Answer：
    feq a 200

  Url：
    https://q.shanyue.tech/fe/react/611.html
  ```

## Contribute Questions

Contribute url: [issues](https://github.com/Chef5/feq-cli/issues)

format:

``` json
{
  "type": "question type",
  "q": "question",
  "qm": "question more",
  "a": "answer",
  "url": "quote url"
}
```

## License

[MIT](./LICENSE)
