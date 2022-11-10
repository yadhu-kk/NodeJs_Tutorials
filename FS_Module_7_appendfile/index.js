var fs= require ('fs');

//create file
// fs.writeFile('test.txt',"test file created",(err)=>{
//    if (err){
//     console.log(err);
//    } 
//     console.log("Created successfully");
   
// })
var abc='asdfgh'
fs.appendFile('test.txt',`${abc} \n`,(err)=>{
    if (err){
     console.log(err);
    } 
     console.log("updated successfully");
    
 })