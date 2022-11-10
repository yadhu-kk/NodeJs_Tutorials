var color = require('cli-color');
var hello ={
    name:'anoop',
    place:'kannur',
    greet:function(){
        console.log(color.blue.bgWhite('i am ' +this.name,'i am from'+this.place));
    },
    message:function(){
        console.log(color.green("sample message"));
    },
}

module.exports = hello;