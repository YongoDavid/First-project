const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
app.listen(5500);

app.use((req,res, next)=>{
    console.log('Server started')

    next()
});
app.use(morgan('dev'));
app.use(express.static('../client'));

app.get('/' , (req,res)=>{
    // res.sendFile(path.join(__dirname , '../client/index.html'));
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.use((req,res)=>{
    res.sendFile(path.join(__dirname , '../client/404.html'));
});