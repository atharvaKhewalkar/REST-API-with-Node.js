const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
    res.status(200).json({
        message:"handling get request for products"
    })
})

router.post('/',(req,res)=>{
    res.status(201).json({
        message:"handling post request for products"
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