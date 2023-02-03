sayName = (names) => {
    console.log(`your name is ${names}`);
}

module.exports = sayName;


// HTTP MODULE
const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
res.end('this is our home page')
}
if (req.url === '/about'){
    res.end('this is a short history about us.')
}

res.end(
    `<h1>hellow</h1>
    <p>we can't find the page you are seeming to search</p>

    <a href ="/">backhome</a>
    `
)
// res.writeHead(200,({"Content-Type":"text/html"}))
// res.write("This is my page")
// res.end()
})

server.listen(4000,()=>{
    console.log("The server is running on port 4000");
})
