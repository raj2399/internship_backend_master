var db=require('../dbconnection');
var jobProfile={
    getAlllJobProfile(callback){
        return db.query("select * from job_profile",callback);
    },
    insertProfile:function(item,callback)
    {
        return db.query("insert into job_profile(job_profile_name) values(?)",[item.job_profile_name],callback);
    },
    updateProfile:function(job_profile_id,item,callback)
    {
        return db.query("update job_profile set job_profile_name=? where job_profile_id=?",[item.job_profile_name,job_profile_id],callback);
    },
    deletejobProfile:function(job_profile_id,callback)
    {
      //  console.log(item);
        return db.query("delete from job_profile  where job_profile_id=?",[job_profile_id],callback);
    },
    getjob_profileByID(job_profile_id,callback)
    {
        return db.query("select * from job_profile where job_profile_id=?",[job_profile_id],callback);
    }
 



}
module.exports=jobProfile;