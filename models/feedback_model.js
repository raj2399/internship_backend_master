var db=require('../dbconnection');
var feedback={
  getAllFeedbackDetails(callback)
  {
   return db.query("select * from feedback",callback);
  },
  insertFeedbackDetails(data,callback){
    let description=data["feedback_description"];
    let feedback_file=data["feedback_file"];
    
  }


}
module.exports=feedback;
