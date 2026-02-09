const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('req:', req.url);
    console.log(req.method)
    console.log(req.headers);
    
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end('Salamaleykom')
    
    
})
console.log('hi');


const port = 3000

server.listen(port, ()=> {

    console.log(`Server is now listening the port ${port} `);
    
})