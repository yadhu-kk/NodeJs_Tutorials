const promise=require ('promise');

function getName(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("yadhu");
        },3000)
    })
}

function getPlace(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("kerala");
        },2000)
    })
}
promise.all([getName(),getPlace()]).then((result)=>{
    console.log(result);
})