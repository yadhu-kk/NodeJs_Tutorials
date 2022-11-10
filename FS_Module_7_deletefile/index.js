var fs=require('fs');


//create file
// fs.writeFile('new.txt',"new file created",(err)=>{
//    if (err){
//     console.log(err);
//    } 
//     console.log("Created successfully");
// });

//delete file
fs.unlink('test.txt',(err)=>{
    if (err){
        console.log(err);
    }
    console.log("deleted successfully");
})