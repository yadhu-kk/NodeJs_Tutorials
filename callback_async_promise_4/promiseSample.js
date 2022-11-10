var promise=require('promise');

function add(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject("first number is zero");
        } else{
            resolve(num1+num2);
        }
    })
}
function mult(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject("first number is zero");
        } else{
            resolve(num1*num2);
        }
    })
}
function div(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject("first number is zero");
        } else{
            resolve(num1/num2);
        }
    })
}
add(20,20).then((sum)=>{
    console.log(`sum is : ${sum}`);
   return mult(sum,sum)
}).then((product)=>{
    console.log( `product is ${product}`)
    return div(product,10)
}).then((result)=>{
    console.log(`result is ${result}`)
})