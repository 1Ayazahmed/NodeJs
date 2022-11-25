 const http = require('http');   //module
 const url = require('url');    //module

 const server = http.createServer( (req , res ) => {   
    
    if(req.url == "/") //routing
    {
    res.end("Hello From the Home Page :)"); 
    }  
    else if(req.url == "/about")
    {
    res.end("Hello From The AboutUs Page :)");
    }

    else if(req.url == "/contact")
    {
        res.end("Hello From The Contact Page :)");
    }
    else
    {
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("<h1>Page Does not exist..!</h1>");
    }   
 });


 server.listen(3000,"127.0.0.1" , () => {
    console.log("Listening on port 3000...");
 });


