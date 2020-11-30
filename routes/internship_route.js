var internship=require('../models/internship_model');
var express = require('express');
var router = express.Router();

router.get("/:internship_id?", function (req, res, next) {
  if (req.params.internship_id) {
    internship.getInternshipByID(req.params.internship_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
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
 }
});
router.get('/',function(req,res,next){
   
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

router.put("/:internship_id", function (req, res, next) {
    internship.updateInternshipDetails(req.params.internship_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:internship_id", function (req, res, next) {
    internship.deleteIntenship(req.params.internship_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
})
module.exports=router;