#!/usr/bin/env node

const clear = require('clear');
const core = require('./lib/core');

clear();

//Check for an SS.Core project 
// if (!files.directoryOrFileExists('core.config.json')) {
//     console.log(chalk.red('The current path does not correspond to an SS.Core project: "core.config.json" does not exist.'));
//     process.exit();
// }

core.init();



