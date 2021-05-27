const fs = require("fs");
const http = require("http");


http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(3000)