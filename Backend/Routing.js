var http = require('http');
var fs = require('fs');
const { error } = require('console');

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type' :'text/html'
    });

    if(req.url == "/"){
        res.end("<h1>Welcome In Home page.</h1>");
    }
    else if(req.url == "/File"){
        fs.readFile('Index.html',(error,data) =>{
            if(error){
                res.end("<h1>File Not Found!</h1>");
            }
            else{
                res.end(data);
            }
        });
    }
    else{
        res.end("<h1>File Not Found!</h1>");
    }
}).listen(8080);