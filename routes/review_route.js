var express = require('express');
var router = express.Router();
var review=require('../models/review_model');

router.get('/',function(req,res,next){
    review.getAllReview(function(err,result){
        if(err)
            res.json(err);
        else
            res.json(result);
    })
})

router.post('/',function(req,res,next){
    review.addReview(req.body,function(err,result){
        if(err)
            res.json(err);
        else
            res.json(result);
    });
})

router.put('/',function(req,res,next){
    review.updateReview(req.body,function(err,result){
        if(err)
            res.json(err);
        else
            res.json(result);
    });
})
router.delete('/',function(req,res,next){
    review.deleteReview(req.body,function(err,result){
        if(err)
            res.json(err);
        else
            res.json(result);
    });
})

module.exports=router;