var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
const { ObjectId } = require('bson');
const connectionURL = 'mongodb://localhost:27017';



exports.createUser = function(req,res){
     
     let body = [];
     req.on('data',(bit)=>{
         body.push(bit);
     }).on('end',()=>{
         console.log(body);
 
         let dataTEXT  = Buffer.concat(body).toString();
         let jsonBody = JSON.parse(dataTEXT);
 
         // prepare a mongo client
         let MongoClient = require('mongodb').MongoClient;
 
         // ask the monogo client to connect on the connectionURL
         MongoClient.connect(connectionURL).then((db)=>{
 
           // INSERT
 
           //FIRST WE SELECT A DATABASE
 
           let database = db.db('parkmanagements');

           database.collection("users").find({ username:jsonBody.username }).toArray().then((resArray)=>{
               if (resArray.length != 0) {
                   res.send({ success:false , message:"Username is already in user."})
               }else{

                    // INSERT

                    // if ( jsonBody.username != null && .... )

                    let user={
                        username:jsonBody.username,
                        fullname:jsonBody.fullname,
                        password:sha1(jsonBody.password),
                        
                    }
                    database.collection('users').insertOne(
                        user
                    ).then((resInsert)=>{
                        res.send({ success:true, message:"Account created !" })
                    }).catch((err)=>{
                        res.send({ success:false, message:"Something went wrong, please try again." })
                    })


               }
           })
 
           
            
 
         }).catch((err)=>{
             resG.send({success:false, message:"Something went wrong."})
         })
 
         // 
     })
     

}


exports.auth = function(req,res){

    
    let body = [];
    req.on('data',(bit)=>{
        body.push(bit);
    }).on('end',()=>{
        console.log(body);

        let dataTEXT  = Buffer.concat(body).toString();
        let jsonBody = JSON.parse(dataTEXT);

        // prepare a mongo client
        let MongoClient = require('mongodb').MongoClient;

        // ask the monogo client to connect on the connectionURL
        MongoClient.connect(connectionURL).then((db)=>{

          // INSERT

          //FIRST WE SELECT A DATABASE

          let database = db.db('parkmanagements');

          database.collection("users").find({ username:jsonBody.username, password: sha1(jsonBody.password) }).toArray().then((resArray)=>{
              if (resArray.length == 0) {
                  res.send({ success:false , message:"Wrong username or password."})
              }else{

                   // OK !!
                   const user = resArray[0];


                   // create token !!
                   let token  = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
                    username: user.username,
                    uid:user._id
                    
                  }, 'secret');
                
                  res.send( { token:token } )

              }
          })

          
           

        }).catch((err)=>{
            resG.send({success:false, message:"Something went wrong."})
        })

        // 
    })
    

}



exports.getCurrentUser = function(req,res){

    const token = req.headers.authorization;

    jwt.verify(token, 'secret', function(err, decoded) {
        console.log(decoded) // bar

        if (decoded) {
            
            // database  get users document _id == ?
            const uid = decoded.uid;

            // prepare a mongo client
            let MongoClient = require('mongodb').MongoClient; 
            MongoClient.connect(connectionURL).then((db)=>{

          let database = db.db('parkmanagements');

          database.collection("users").find({ _id: ObjectId(uid) }).toArray().then((resArray)=>{
              if (resArray.length == 0) {
                  res.send({ success:false , message:"Session expired."})
              }else{

                   // OK !!
                   const user = resArray[0];

                    delete user.password

                    // revoketokne : updateTokne(uid)
                  res.send( user )

              }
            })
        })

        }else{
            res.send({ success: false, message:"session expired." })
        }

    });
 
}

