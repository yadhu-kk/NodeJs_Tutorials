const {readFileSync,writeFileSync} = require ('fs')

const first= readFileSync('./sample/sample1/first.txt' ,'utf-8');
const second= readFileSync('./sample/sample1/second.txt' ,'utf-8');
//console.log(first,'\n',second);

writeFileSync('./sample/sample1/result.txt',`here is the result:${first} ${second}`,{flag:'a'});//(flag:a=>append the value)