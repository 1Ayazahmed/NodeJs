
const http = require('http');   //module
const url = require('url');    //module
const fs = require('fs');



const server = http.createServer( (req , res ) => {   
    const data = fs.readFileSync("./userapi.json","utf-8" );
    const objdata = JSON.parse(data);

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
   else if(req.url == "/userapi")
   {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(objdata);
    //    fs.readFile("./userapi.json","utf-8", (err,data) => { 
    //     console.log(data);
    //     res.end(objdata);
    // });     
       
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
