let http = require('http');
let fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    }); 
    fs.readFile('./Index.html',(error,data) =>{
        if(error){
            res.writeHead(404);
            res.write("File Not Found!");
        }else{
            res.write(data);
        }
    })
}).listen(8080);