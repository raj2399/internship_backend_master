var db=require('../dbconnection');
var internship={
  getAllInternshipDetails(callback)
  {
   return db.query("select * from internship_type",callback);
  },
  getIntenrshipTypeByID(internship_type_id,callback)
  {
      return db.query("select * from internship_type where internship_type_id=?",[internship_type_id],callback);
  },
  insertIntenshipType:function(item,callback)
  {
    return db.query("insert into internship_type(internship_type_duration,internship_type_name) values(?,?)",[item.internship_type_duration,item.internship_type_name],callback);
  },
  updateIntenshipType:function(internship_type_id,item,callback)
  {
    return db.query("update internship_type set internship_type_name=?,internship_type_duration=? where internship_type_id=?",[item.internship_type_name,item.internship_type_duration,internship_type_id],callback);
  },
  deleteInternshipType:function(internship_type_id,callback)
  {
    return db.query("delete from internship_type  where internship_type_id=?",[internship_type_id],callback);
  },
}
module.exports=internship;
