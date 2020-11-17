var db=require('../dbconnection');
var internship={
  getAllInternshipDetails(callback)
  {
   return db.query("select * from internship_type",callback);
  }
//   getinternshipDetailsByType(internship_type_name,callback)
//   {
//     return db.query("select * from internship_type where internship_type_name=?",[internship_type_name],callback);
//   }

}
module.exports=internship;
