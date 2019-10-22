const fs = require('fs');
const path = require('path');

function getCurrentDirectoryBase(){
    return path.basename(process.cwd());
}

function directoryOrFileExists(path){
    return fs.existsSync(path);
}

function createDirectory(name){
    const targetPath = path.join(".", name);
    console.log("creating directory at: " + targetPath)
    if(!directoryOrFileExists(targetPath)){
        return fs.mkdirSync(targetPath);
    } else {
        return Promise.resolve();
    }
}

function writeFile(directory, name, data){
    const targetPath = path.join(directory, name);
    console.log("creating file at: " + targetPath);
    return fs.writeFileSync(targetPath, data);
}

module.exports = {getCurrentDirectoryBase, directoryOrFileExists, createDirectory, writeFile};