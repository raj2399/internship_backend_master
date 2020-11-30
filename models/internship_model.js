var db=require('../dbconnection');
var dateformat=require('dateformat');
var internship={
  getAllInternshipDetails(callback)
  {
   return db.query("select * from internship",callback);
  },
  getInternshipByID(internship_id,callback)
  {
      return db.query("select * from internship where internship_id=?",[internship_id],callback);
  },
  insertInternshipDetails(data,callback){
    let addondate=new Date();
    addondate=dateformat(addondate,"yyyy-mm-dd");
    let status=data["approved_status"];
    let ctc=data["ctc"];
    let start_date=Date.parse(data["start_date"]);
    start_date=dateformat(start_date,"yyyy-mm-dd");
    let stipend=data["stipend"];
    let company=data["company_id"];
    let faculty=data["faculty"];
    let type=data["internship_type_id"];
    let profile=data["job_profile_id"];
    let location=data["location_id"];
    let studentid=data["student_id"];
   return db.query("insert into internship(added_on,approved_status,ctc,start_date,stipend,company_id,faculty_id,internship_type_id,job_profile_id,location_id,student_id) values(?,?,?,?,?,?,?,?,?,?,?)",[addondate,status,ctc,start_date,stipend,company,faculty,type,profile,location,studentid],callback);

  },
  updateInternshipDetails(internship_id,data,callback){
    let addondate=data["addon_date"];
    addondate=dateformat(addondate,"yyyy-mm-dd");
    //let status=data["approved_status"];
    let ctc=data["ctc"];
    let start_date=Date.parse(data["start_date"]);
    start_date=dateformat(start_date,"yyyy-mm-dd");
    let stipend=data["stipend"];
    let company=data["company_id"];
    let faculty=data["faculty_id"];
    let type=data["internship_type_id"];
    let profile=data["job_profile_id"];
    let location=data["location_id"];
    let studentid=data["student_id"];
    return db.query("update internship set added_on=?,ctc=?,start_date=?,stipend=?,company_id=?,faculty_id=?,internship_type_id=?,job_profile_id=?,location_id=?,student_id=? where internship_id=?",[addondate,ctc,start_date,stipend,company,faculty,type,profile,location,studentid,internship_id],callback)
  },
  deleteIntenship(internship_id,callback){
    return db.query("delete from internship where internship_id=?",[internship_id],callback);
  }

}
module.exports=internship;
