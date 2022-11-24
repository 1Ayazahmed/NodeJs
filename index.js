 const http = require('http');

 const server =http.createServer( (req , res ) => {
    res.end("hello From the Othe Sides :)");   //responded
 } )


 server.listen(3000,"127.0.0.1" , () => {
    console.log("Listening on port 3000...");
 });

