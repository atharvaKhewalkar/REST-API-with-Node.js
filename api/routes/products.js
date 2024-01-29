const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose')


router.get('/',(req,res)=>{
    res.status(200).json({
        message:"handling get request for products"
    })
})

router.post('/',(req,res,next)=>{
    
    const product=new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price: req.body.price
    });

    product.save();

    res.status(201).json({
        message:"handling post request for products",
        createdProduct:product
    })
})

router.get('/:productId',(req,res)=>{
    const id = req.params.productId;
    if(id=== 'special'){
        res.status(200).json({
            message:'You discovered the special ID',
            id:id
        });
    }
        else{
            res.status(200).json({
                message:"You passed an ID"
            })
        }
    
})

router.patch('/:productId',(req,res)=>{
    res.status(200).json({
        message:'updated product'
    })
    
})

router.delete('/:productId',(req,res)=>{
    res.status(200).json({
        message:'deleted product'
    })  
})
module.exports = router;