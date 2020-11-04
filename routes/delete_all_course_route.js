var course=require('../models/course_model');
var express=require('express');
var router=express.Router();
router.post('/',function(req,res,next){
    course.deleteAll(req.body,function(err,rows){
 
     if(err)
     {
     res.json(err);
     }
     else
     {
       console.log(req.body);
     res.json(rows);
     }
    });
  });


module.exports = router;