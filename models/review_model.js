var db=require('../dbconnection');
var dateformat=require('dateformat');
var review={
getAllReview(callback){
    return db.query("select * from review where review_status=1",callback);
},
getStudentReview(callback){
    return db.query("select r.*,i.*,s.* from review r, internship i, student s where r.internship_id=i.internship_id and i.student_id=s.student_id and review_status=1",callback);
},
getReportedReview(callback){
    return db.query("select r.*,i.*,s.* from review r, internship i, student s where r.internship_id=i.internship_id and i.student_id=s.student_id and report_count>29",callback);
}
,
getReviewByID(review_id,callback)
  {
      return db.query("select * from review where review_id=?",[review_id],callback);
  },
addReview(data,callback){
    let addondate=new Date();
    //addondate=dateformat(addondate,"yyyy-mm-dd");
    let cons=data["cons"];
    let pros=data["pros"];
    let rating=data["rating"];
    let des=data["review_description"];
    let status=data["review_status"];
    let title=data["review_title"];
    let admin=data["admin_id"];
    let internshipID=data["internship_id"];
    return db.query("insert into review(cons,pros,rating,review_date,review_description,review_status,review_title,admin_id,internship_id) values(?,?,?,?,?,?,?,?,?)",[cons,pros,rating,addondate,des,status,title,admin,internshipID],callback);
},
updateReview(review_id,data,callback){
    let addondate=new Date();
    let cons=data["cons"];
    let pros=data["pros"];
    let rating=data["rating"];
    let des=data["review_description"];
    let title=data["review_title"];
    let internshipID=data["internship_id"];
    return db.query("update review set cons=?,pros=?,rating=?,review_date=?,review_description=?,review_title=?,internship_id=? where review_id=?",[cons,pros,rating,addondate,des,title,internshipID,review_id],callback);
},
deleteReview(review_id,callback){
    return db.query("delete from review where review_id=?",[review_id],callback);
},
updateReportCount(review_id,callback){
    return db.query("update review set report_count=report_count+1 where review_id=?",[review_id],callback);
},
updateReportStatus(review_id,admin_id,callback){
    return db.query("update review set report_count=report_count+1,review_status=0,admin_id=? where review_id=?",[admin_id,review_id],callback);
},
getReviewByInternShipId(id,callback){
    return db.query("select * from review where internship_id=?",[id],callback);
}

}

module.exports=review;