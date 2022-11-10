var fs= require('fs');

///async data

fs.readFile('./sample/sample1/first.txt',(err,data)=>{
    if (err) {
        return console.log(err);
    }
    else {
        console.log('async data:',data.toString());
    }
    console.log('hiii');
})



///sync data

var data=fs.readFileSync('./sample/sample1/result.txt')
console.log('sync data:',data.toString());
console.log("end task");
