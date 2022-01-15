const express = require('express')
const app = express()
const port = 8080
var jwt = require('jsonwebtoken');
const { createUser, auth, getCurrentUser } = require('./my-modules/auth');
const cors = require('cors')

app.use(cors())

app.use(function(req,res,next){
    
    const token = req.headers.authorization;
 
    const url = req.url;

    if (url === "/api/signup" || url === "/api/signin") {
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


app.post('/api/signup',(req,res)=>{
    createUser(req,res);
})


app.post('/api/signin',(req,res)=>{
    auth(req,res);
})


app.get('/api/auth/info',(req,res)=>{
    getCurrentUser(req,res);
})








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})