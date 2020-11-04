var student=require('../models/student_model')
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    student.addStudent(req.body,function(err,rows){
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

router.get('/:student_email',function(req,res,next){
    student.getstudentByEmail(req.params.student_email,function(err,rows){
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

router.put('/',function(req,res,next){
    student.updateStudent(req.body,function(err,rows){
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

module.exports=router;