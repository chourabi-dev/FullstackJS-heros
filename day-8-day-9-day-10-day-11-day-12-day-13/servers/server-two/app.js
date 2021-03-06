const express = require('express')
const { addContact, getAllContacts, addManyContacts, updateManyContacts, updateContactById, deleteById } = require('./modules/contacts')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send([1,2,3])
})
  
app.post('/contact/add', (req, res) => {
  addContact(req,res);
})

app.post('/contact/add-many', (req, res) => {
    addManyContacts(req,res);
  })


app.get('/contacts/list', (req, res) => {
    getAllContacts(req,res);
})
  

app.post('/contacts/update-many',(req,res)=>{
  updateManyContacts(req,res);
})

app.post('/contacts/update-one',(req,res)=>{
  updateContactById(req,res);
})


app.delete('/contacts/delete',(req,res)=>{
  deleteById(req,res);
})
 



  
    



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})