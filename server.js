const http = require('http')
const fs = require('fs')
const _ = require('lodash');


const server = http.createServer((req,res) => {

    const num = _.random(2,20);
    console.log(num);


    res.setHeader('Content-Type','text/html');

//Listening for requests
    let path ='./views/'

    switch(req.url){
        case '/':
            path +='index.html';
            break;
        case '/about':
            path += 'about.html';
        break;

        //redirects  
        case '/about-blah':
           res.statusCode = 301;
           res.setHeader('Location','/about');
           res.end();
        break;
        default:
            path += '404.html';
            break;
    }

   fs.readFile(path,(err,data) => {
    if(err){
        console.log(err)
        res.end()
    }
    else{
        res.write(data);
        res.end();
    }
   })
})

server.listen(3000,() => {
    console.log("server is running at port number 3000");
})