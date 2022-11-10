var fs=require('fs');


//Create file
fs.writeFile('./test1.txt', 'new file created. . .',(err)=>{
    if (err) {
        console.error(err);
    }
    console.log('file created uccessfully!!');

});