var express = require('express');
var router = express.Router();
var review=require('../models/review_model');
router.get("/reportedreview",function(req,res,next){
  
  review.getReportedReview(function(err,result){
    if(err)
    res.json(err);
    else
    res.json(result);
    
  })
});

router.get("/:review_id?", function (req, res, next) {
  if (req.params.review_id) {
    review.getReviewByID(req.params.review_id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    review.getStudentReview(function(err,result){
      if(err)
          res.json(err);
      else
          res.json(result);
  }) }
});

router.get("/ByinternshipId/:id",function(req,res,next){
  review.getReviewByInternShipId(req.params.id,function(err,result){
    if(err)
      res.json(err);
    else
    res.json(result);
  })
});
router.post('/',function(req,res,next){
    review.addReview(req.body,function(err,result){
        if(err)
            res.json(err);
        else
            res.json(result);
    });
})
router.put("/report/:review_id", function (req, res, next) {
  review.updateReportCount(req.params.review_id, function (err, rows) {
  if (err) {
    res.json(err);
  } else {
    res.json(rows);
  }
});
});

router.put("/reportstatus/:review_id/:admin", function (req, res, next) {
  review.updateReportStatus(req.params.review_id,req.params.admin, function (err, rows) {
  if (err) {
    res.json(err);
  } else {
    res.json(rows);
  }
});
});

router.put("/:review_id", function (req, res, next) {
    review.updateReview(req.params.review_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});



router.delete("/:review_id", function (req, res, next) {
    review.deleteReview(req.params.review_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports=router;