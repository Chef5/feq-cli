#!/usr/bin/env node
// 包信息
const package = require('../package');
// 核心处理命令行
const program = require('commander');
// 美化终端字符显示
const chalk = require("chalk");
// 与用户交互
const inquirer = require('inquirer');
// loading模块
const ora = require('ora');

const verStr = [
    `    ___                          ___           `,
    `  /'___\\                        /\\_ \\    __    `,
    ` /\\ \\__/   __     __         ___\\//\\ \\  /\\_\\   `,
    ` \\ \\ ,__\\/'__\`\\ /'__\`\\      /'___\\\\ \\ \\ \\/\\ \\  `,
    `  \\ \\ \\_/\\  __//\\ \\L\\ \\    /\\ \\__/ \\_\\ \\_\\ \\ \\ `,
    `   \\ \\_\\\\ \\____\\ \\___, \\   \\ \\____\\/\\____\\\\ \\_\\`,
    `    \\/_/ \\/____/\\/___/\\ \\   \\/____/\\/____/ \\/_/`,
    `                     \\ \\_\\                     `,
    `                      \\/_/                      `,
    '',
    package.description,
    '',
    `version: ${chalk.green(package.version)}`
  ].join('\n')

program.version(verStr,'-V,--version')

program
  .usage('[cmd] <options>')
  .arguments('<cmd> [env]')
  .action((cmd, params)=>{
    
  })

program.parse(process.argv);