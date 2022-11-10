var fs=require('fs');

//read file

fs.readFile('./test.txt', 'utf-8',(err,data)=>{
    if (err) {
        console.error(err);
    }
    console.log(data);

});