const express = require('express')
const app = express()
const port = 8080
var jwt = require('jsonwebtoken');


app.use(function(req,res,next){
    

     

    const token = req.headers.authorization;
 
    const url = req.url;

    if (url === "/signin") {
        next();
    }else{
        if (token  == null) {
            res.send({ success: false, message:"you need to be fully authentificated to access this resource." })
        }else{
    
            // WE NEED TOCHECK TO VALIDITY OF THE TOKEN

            jwt.verify(token, 'secret', function(err, decoded) {
                console.log(decoded) // bar

                if (decoded) {
                    next()
                }else{
                    res.send({ success: false, message:"session expired." })
                }

            });
    
     
        }
    
    }




    
})


app.get('/test', (req, res) => {
    res.send('Hello test!')
})
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/signin', (req, res) => {

    let token  = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (15),
        id:15,
        email:'tchourabi@gmail.com'
      }, 'secret');
    
      res.send( { token:token } )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})