const connectionURL = 'mongodb://localhost:27017';
const { ObjectId } = require('bson');
const url = require('url');

exports.addContact = function (reqG,resG){
      // get the data sent by the user !!
      let body = [];
      reqG.on('data',(bit)=>{
          body.push(bit);
      }).on('end',()=>{
          console.log(body);
  
          let dataTEXT  = Buffer.concat(body).toString();
          let jsonBody = JSON.parse(dataTEXT);
  
          // prepare a mongo client
          let MongoClient = require('mongodb').MongoClient;

          // ask the monogo client to connect on the connectionURL
          MongoClient.connect(connectionURL).then((res)=>{

            // INSERT

            //FIRST WE SELECT A DATABASE

            let database = res.db('contactsdb');

            // prepare the document !!

            if (jsonBody.fullname != null && jsonBody.phone != null) {

                jsonBody.date = new Date();

                database.collection('contacts').insertOne(jsonBody).then((resInsert)=>{
                    resG.send({success:true, message:"data inserted !"})
                }).catch((errInsert)=>{
                    resG.send({success:false, message:"Something went wrong, while inserteing data"})
                })
            }else{
                resG.send({success:false, message:"bad request !"})
            }

          }).catch((err)=>{
              resG.send({success:false, message:"Something went wrong."})
          })

          // 
      })
}


exports.addManyContacts = function (reqG,resG){
    // get the data sent by the user !!
    let body = [];
    reqG.on('data',(bit)=>{
        body.push(bit);
    }).on('end',()=>{
        console.log(body);

        let dataTEXT  = Buffer.concat(body).toString();
        let jsonBody = JSON.parse(dataTEXT);

        // prepare a mongo client
        let MongoClient = require('mongodb').MongoClient;

        // ask the monogo client to connect on the connectionURL
        MongoClient.connect(connectionURL).then((res)=>{

          // INSERT

          //FIRST WE SELECT A DATABASE

          let database = res.db('contactsdb');

          // prepare the array document !!

         
 

              database.collection('contacts').insertMany(jsonBody).then((resInsert)=>{
                  
                  resG.send({success:true, message:resInsert.insertedCount+" data inserted !"})
              }).catch((errInsert)=>{
                  resG.send({success:false, message:"Something went wrong, while inserteing data"})
              })
           

        }).catch((err)=>{
            resG.send({success:false, message:"Something went wrong."})
        })

        // 
    })
}


exports.getAllContacts = function (reqG,resG){
 
  
 
        // prepare a mongo client
        let MongoClient = require('mongodb').MongoClient;

        // ask the monogo client to connect on the connectionURL
        MongoClient.connect(connectionURL).then((res)=>{

          // SELECT

          //FIRST WE SELECT A DATABASE

          let database = res.db('contactsdb');

          // prepare the document !!

          let params= url.parse(reqG.url,true).query;

          

                let filter =  params;



             
              database.collection('contacts').find(filter).toArray().then((result)=>{
                  resG.send({success:true, contacts:result})
              }).catch((errInsert)=>{
                  resG.send({success:false, message:"Something went wrong, while getting data"})
              })
           
        }).catch((err)=>{
            console.log(err);
            resG.send({success:false, message:"Something went wrong."})
        })


}



exports.updateManyContacts = function (reqG,resG){
    // get the data sent by the user !!

    /**
     * {
            "filter":{ "address":"tunis" },
            "new_values":{ "address":"Tunisia, tunis" }
        }
     */
    let body = [];
    reqG.on('data',(bit)=>{
        body.push(bit);
    }).on('end',()=>{
        console.log(body);

        let dataTEXT  = Buffer.concat(body).toString();
        let jsonBody = JSON.parse(dataTEXT);

        // prepare a mongo client
        let MongoClient = require('mongodb').MongoClient;

        // ask the monogo client to connect on the connectionURL
        MongoClient.connect(connectionURL).then((res)=>{

          // INSERT

          //FIRST WE SELECT A DATABASE

          let database = res.db('contactsdb');

          // prepare the array document !!

            database.collection('contacts').updateMany(
                jsonBody.filter,
                { $set : jsonBody.new_values }
            ).then((responseUpdate)=>{
                
                resG.send({success:true, message:responseUpdate.modifiedCount+" contacts updated "})

            }).catch((err)=>{
                resG.send({success:false, message:"Something went wrong, while getting data"})
            })
 
           

        }).catch((err)=>{
            resG.send({success:false, message:"Something went wrong."})
        })

        // 
    })
}





exports.updateContactById = function (reqG,resG){
    // get the data sent by the user !!

    
    let queries = url.parse(reqG.url,true).query;

    if ( queries.id != null ) {
        
        let docID = queries.id;
    

    
    let body = [];
    reqG.on('data',(bit)=>{
        body.push(bit);
    }).on('end',()=>{
        console.log(body);

        let dataTEXT  = Buffer.concat(body).toString();
        let jsonBody = JSON.parse(dataTEXT);

        // prepare a mongo client
        let MongoClient = require('mongodb').MongoClient;

        // ask the monogo client to connect on the connectionURL
        MongoClient.connect(connectionURL).then((res)=>{

          // INSERT

          //FIRST WE SELECT A DATABASE

          let database = res.db('contactsdb');

          // prepare the array document !!

            database.collection('contacts').updateOne(
                { _id : ObjectId(docID)  },
                { $set : jsonBody }
            ).then((responseUpdate)=>{
                
                resG.send({success:true, message:responseUpdate.modifiedCount+" contacts updated "})

            }).catch((err)=>{
                resG.send({success:false, message:"Something went wrong, while getting data"})
            })
 
           

        }).catch((err)=>{
            resG.send({success:false, message:"Something went wrong."})
        })

        // 
    })
    }else{
        resG.send({success:false, message:"ID param is required"})
    }
}





exports.deleteById = function (reqG,resG){
    // get the data sent by the user !!

    
    let queries = url.parse(reqG.url,true).query;

    if ( queries.id != null ) {
        
        let docID = queries.id;
    
 
        // prepare a mongo client
        let MongoClient = require('mongodb').MongoClient;

        // ask the monogo client to connect on the connectionURL
        MongoClient.connect(connectionURL).then((res)=>{

          // INSERT

          //FIRST WE SELECT A DATABASE

          let database = res.db('contactsdb');

          // prepare the array document !!

            database.collection('contacts').deleteOne(
                { _id : ObjectId(docID)  }
            ).then((responseUpdate)=>{
                
                resG.send({success:true, message:responseUpdate.deletedCount+" contacts deleted "})

            }).catch((err)=>{
                resG.send({success:false, message:"Something went wrong, while getting data"})
            })

        }).catch((err)=>{
            resG.send({success:false, message:"Something went wrong."})
        })

        // 
    
    }else{
        resG.send({success:false, message:"ID param is required"})
    }
}