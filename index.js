const express = require('express');
const app = express()
const port = 5000

app.get('/', (req, res)=>
{
    res.send('Hello from my  first ever server');

})
app.get('/about', (req, res)=>
{
    res.send('Hello from my  about server');

})
app.listen(port,()=>{
    console.log(`my first is running on port:${port}`)
})