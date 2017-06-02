const chalk = require('chalk');

const message = message => chalk.white(message);

const success = message => chalk.green(message);

const error = message =>
  `${chalk.bold.underline.red('ERROR:')} ${chalk.red(message)}`;

const highlight = (color, message) => chalk[`bg${color}`](message);

module.exports = {
  message,
  success,
  error,
  highlight,
};