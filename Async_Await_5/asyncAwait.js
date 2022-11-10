const promise=require ('promise');

function getName(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("yadhu");
        },4000)
    })
}

function getPlace(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("kerala");
        },2000)
    })
}
// function getUser(){
//     let name=getName()
//     console.log(name);
// }
async function getUser(){
    let name=await getName()
    console.log(name);
    let place=await getPlace()
    console.log(place);
}
getUser()