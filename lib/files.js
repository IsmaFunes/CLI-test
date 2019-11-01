const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function getCurrentDirectoryBase() {
    return path.basename(process.cwd());
}

function directoryOrFileExists(path) {
    return fs.existsSync(path);
}

function createDirectory(name) {
    const targetPath = path.join(".", name);
    console.log("created directory at: " + chalk.green(targetPath))
    if (!directoryOrFileExists(targetPath)) {
        return fs.mkdirSync(targetPath);
    } else {
        return Promise.resolve();
    }
}

function writeFile(directory, name, data) {
    const targetPath = path.join(directory, name);
    console.log("created file at: " + chalk.green(targetPath));
    return fs.writeFileSync(targetPath, data);
}

function getFile(directory, name, callback) {
    const targetPath = path.join(directory, name);
    return fs.readFile(targetPath, 'utf-8', callback);
}

module.exports = { getCurrentDirectoryBase, directoryOrFileExists, createDirectory, writeFile, getFile };