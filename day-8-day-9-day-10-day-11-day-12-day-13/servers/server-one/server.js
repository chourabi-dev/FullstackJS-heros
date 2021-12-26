var http = require('http');
var dateModule = require('./modules/dateModule');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    
    
    // extract queries !!
    var queries = url.parse(req.url,true).query;
    // extract pathname
    var pathname = url.parse(req.url,true).pathname;


    console.log(queries);
    console.log(pathname);
    
    switch (pathname) {
        case '/somme':

            fs.appendFile('log.txt',new Date().toISOString()+ ' x : '+queries.x+ ' y : '+queries.y+'\n',function(err){
                if (err) {
                    throw err;
                }
            })


            res.end(  (Number(queries.x) + Number(queries.y) ).toString()  )
            break;
    
            case '/sous':
                fs.appendFile('log.txt',new Date().toISOString()+ ' x : '+queries.x+ ' y : '+queries.y+'\n',function(err){
                    if (err) {
                        throw err;
                    }
                })

                res.end(  (Number(queries.x) - Number(queries.y) ).toString()  )
                break;
        default:
            res.end("welcome to our app ");
        break;
    }




     
}).listen(8080); // infinite loop !!!