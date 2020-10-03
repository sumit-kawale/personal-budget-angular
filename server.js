const { EWOULDBLOCK } = require('constants');
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

let budgetdata=require('./budgetdata.json');

app.get('/hello', (req, res)=>{
    res.send('Hello world');
});

app.get('/budget', (req, res)=>{
    res.json(budgetdata);
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});