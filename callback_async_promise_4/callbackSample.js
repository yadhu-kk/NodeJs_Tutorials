function add(num1,num2,callback){
    var err=false;
    if(num1==0){
        err=true

    }
    callback(num1+num2,err)
}
function mult(num1,num2,callback){
    callback(num1*num2);
}
function div (num1,num2,callback){
    callback(num1/num2);
}



add(10,15,(sum,err)=>{
    if(err){
        console.log("first number is zero");
    } else {
        console.log(`sum is ${sum}`);
        mult(sum,sum,(product)=>{
            console.log(`product is ${product}`)
            div(product,10,(result)=>{
                console.log(`result is:${result}`)
        })
        
        })
    }
})