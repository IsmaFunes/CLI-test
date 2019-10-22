#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const core = require('./lib/core');

clear();

//Check for an SS.Core project 
// if (!files.directoryOrFileExists('core.config.json')) {
//     console.log(chalk.red('The current path does not correspond to an SS.Core project: "core.config.json" does not exist.'));
//     process.exit();
// }

console.log(
    chalk.red(
      figlet.textSync('SS.Core', { horizontalLayout: 'full' })
    )
  );

core.generatePattern();

