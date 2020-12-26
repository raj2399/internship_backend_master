var dashboard = require("../models/dashboard_model");
var express = require("express");
var router = express.Router();

router.get('/',function(req,res,next){
    dashboard.pichart(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/barchart',function(req,res,next){
    dashboard.barchart(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/linechart',function(req,res,next){
    dashboard.barchart(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;