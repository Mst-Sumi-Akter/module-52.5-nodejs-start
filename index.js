const express = require('express');
<<<<<<< HEAD
const phones = require('./phones.json')
const app = express()
const port = 3000

app.get('/', (req, res)=>
{
    res.send('My phones information comming soon.....!');
=======
const app = express()
const port = 5000

app.get('/', (req, res)=>
{
    res.send('Hello from my  first ever server');
>>>>>>> a1154058765f66fb037701f1cb33f2e1a154f336

})
app.get('/about', (req, res)=>
{
    res.send('Hello from my  about server');

})
<<<<<<< HEAD
app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log('i need data for id :',id);
    const phone  = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})

app.get('/phones', (req, res)=>{
    res.send(phones);

})


=======
>>>>>>> a1154058765f66fb037701f1cb33f2e1a154f336
app.listen(port,()=>{
    console.log(`my first is running on port:${port}`)
})