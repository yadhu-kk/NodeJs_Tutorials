var os=require("os")
console.log(os.arch());//architecture
console.log(os.release());//
console.log(os.freemem());//freememory details
console.log(os.hostname());//host detail
console.log(os.userInfo());


//========1>OS Module:provide many functions that u can use to retrieve information from the underlying os 
// and the computer the program rund on and interact with it.

//method returns the systemuptime in seconds    
console.log(`the system uptime is${os.uptime}`);

// current os detail
const currentOs = {
    name :os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freemem:os.freemem()

}
console.log(currentOs);