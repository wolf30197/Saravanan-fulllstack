const cal=require('./app');
console.log(cal.added(10,5));
console.log(cal.subtract(10,5));
console.log(cal.multiply(10,5));
console.log(cal.division(10,5));

const http=require('http');
const url=require('url');
// const server=http.createServer((req,res)=>{
// res.statusCode=200;
// res.setHeader('Content-Type','text/html');
// res.end('<p>hello guys</p>');
// })
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    console.log(parsedUrl);
    if(parsedUrl.pathname==='/'){
        res.writeHead(200,{"Content-Type":'text/html'});
        res.write("<h1>home page</h1>");
    }
    else if(parsedUrl.pathname==="/contact"){
        res.writeHead(200,{"Content-Type":'text/html'});
        res.write("<h1>contact page</h1>");
    }
    else if(parsedUrl.pathname==="/about"){
        res.writeHead(200,{"Content-Type":'text/html'});
        res.write("<h1>about page</h1>");
    }
    else{
        res.writeHead(404,{"Content-Type":'text/html'});
        res.write("<h1>page not found</h1>");
    }
    res.end();
})
server.listen(3000,()=>{
    console.log('server running successfully');
})