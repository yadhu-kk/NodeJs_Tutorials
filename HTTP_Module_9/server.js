var http = require ('http');
const port=3000;

const server =http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>hello from server. . .</h1>')
    res.end();
    }
    if(req.url=='/home'){
        res.write('<h1>welcome to home page. . .</h1>')
    res.end();
    }
    if(req.url=='/about'){
        res.write('<h1>welcome to about page. . .</h1>')
    res.end();
    }
    
}).listen(port,()=>{
    console.log('server listening portNo:',`${port}`);
})