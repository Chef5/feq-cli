#!/usr/bin/env node
const package = require('../package');
const program = require('commander');
const chalk = require("chalk");
const inquirer = require('inquirer');
const ora = require('ora');
const request = require('./request');
const libs = require('./libs');

const display = console.log;

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

program
  .name('feq')
  .usage('[command]')
  .description(`${package.description}`)
  .helpOption('-h, --help', '显示帮助')
  .addHelpCommand('help [command]', '显示帮助')
  .addHelpText('after', `\nExamples: 
  feq             随机一题
  feq -t js       随机js类型题目`)
  .version(verStr, '-V,--version', '查看版本')

program.command('r', { isDefault: true })
  .description('random 随机一题(默认)')
  .option('-h, --help', '出题帮助')
  .option('-t, --type <char>', '类型', 'random')
  .action(async (options, r) => {
    const { help, type} = options;
    if (help) {
      return await libs.showTypeMenu();
    }
    const question = await request.getQuestion(type);
    libs.showQuestion(question);
  });

program.command('q')
  .description('question 查看题目')
  .argument('<id>', '题目id')
  .action(async (id) => {
    if (!libs.checkId(id)) {
      return display(libs.errorMessage.idError);
    }
    const question = await request.getQuestionById(Number(id));
    libs.showQuestion(question);
  });

program.command('a')
  .description('answer 查看答案')
  .argument('<id>', '题目id')
  .action(async (id) => {
    const question = await request.getAnswerById(id);
    libs.showAnswer(question);
  });


program.command('type')
  .description('显示类型列表')
  .action(async () => {
    await libs.showTypeMenu();
  });

program.parse();
