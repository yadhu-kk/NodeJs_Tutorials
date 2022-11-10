var path = require('path');

const p='/home/tutorials/nodejs/path.js';
console.log(path.basename(p)); //get base name
console.log(path.extname(p)); //get ext name.,ie,.js.
console.log(path.join('/home','js','tutorial','index.html'));//join path.
console.log(path.parse(p));