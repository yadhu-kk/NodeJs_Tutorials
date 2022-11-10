var si=setInterval(()=>{
    console.log("hello");
},1000);

setTimeout(()=>{
    clearInterval(si)
    console.log("completed")
},5000)

//clearTimeout__is use to clear setTimeout function.