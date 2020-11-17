var internship=require('../models/internship_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    internship.getAllInternshipDetails(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.post('/',function(req,res,next){
    console.log(req.body);
    internship.insertInternshipDetails(req.body,function(err,result){
        if(err)
            res.json(err);
        else
            res.json(result);
    })
});

router.put('/',function(req,res,next){
internship.updateInternshipDetails(req.body,function(err,result){
    if(err)
            res.json(err);
        else
            res.json(result);
})
});
module.exports=router;