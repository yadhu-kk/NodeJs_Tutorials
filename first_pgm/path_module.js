const path = require("path")
console.log(path);

//to get file path
const filePath=path.join('/path_file','path1',"api.txt")
console.log(filePath);

//get the base name
const base=path.basename(filePath)
console.log(base);

//to get absolute path

const absolute_path=path.join(__dirname,filePath);
console.log(absolute_path);