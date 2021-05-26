var a = 10;
var b = 20;

var sum = a + b;
console.log(sum)

if(a>b){
    console.log("a is greater than b")
}else{
    console.log("a is smaller than b")
}


const http = require("http");

http.createServer((req,res)=>{
   
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hello from server")

}).listen(3000)


const msg = require("./app1.js");
console.log(msg)


const func = require("./app2.js");
func.fun()
