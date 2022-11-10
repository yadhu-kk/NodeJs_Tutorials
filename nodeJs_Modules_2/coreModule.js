var http = require ("http");//core module
var hello=require ('./LocalModule/localModule'); // local module
var color = require('cli-color'); //NPM / Third party module.



http
     .createServer(function(req,res){
        res.write("hello from http module");
        res.end()

     }).listen(5000,()=>{
        console.log("server is listening port No:5000. . .");
     })

     hello.greet();
console.log(color.red(hello.name.toUpperCase()))
hello.message()

