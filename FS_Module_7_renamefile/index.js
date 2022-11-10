var fs=require('fs');

//Create file
// fs.writeFile('test.txt',"this is my sample file",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("created successfully");
// })

//Rename file=> fs.rename( oldPath, newPath, callback )
fs.rename('test.txt','sample.txt',(err)=>{
    if (err){
        console.log(err);
    }
    console.log('updated successfully');
})