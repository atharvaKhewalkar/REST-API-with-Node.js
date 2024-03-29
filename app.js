const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const productRoutes = require('./api/routes/products');
const orderRoutes= require('./api/routes/orders');

mongoose.connect('mongodb://localhost:27017/API/APIS');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*');
    res.header('Access-Control-Allow-Header','*')
})


app.use('/products',productRoutes);
app.use('/orders',orderRoutes);



app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status = 404;
    next(error);
})

app.use((req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports= app