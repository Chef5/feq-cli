const chalk = require("chalk");
const request = require('./request');
const display = console.log;

module.exports = {
  errorMessage: {
    idError: `${chalk.red('id错误')}`
  },

  checkId: (id) => id && !Number.isNaN(Number(id)),

  showQuestion: (data, withAnswer = false) => {
    display(`Q: ${chalk.green(data.q)}`);
    if (withAnswer) {
      display(`\nA：${data.a}`);
    } else {
      display(`\nAnswer：\n  ${chalk.green('feq a ' + data.id)}`);
    }
    display(`\nUrl：\n  ${data.url}\n`);
  },

  showAnswer: (data) => {
    if (data.a) {
      display(`A: ${chalk.green(data.a)}`);
    } else {
      display(chalk.red('访问下方url查看完整答案'));
    }
    display(`\nUrl：\n  ${data.url}\n`);
  },

  showTypeMenu: async () => {
    display('options: \n  -t, --type [type]: 出题类型\n');
    display('[type]:');
    const types = ['random: 随机（默认）'];
    const typeList = await request.getTypeList();
    display([...types, ...typeList].map((t) => `  ${chalk.green(t)}`).join('\n'));
  },
}