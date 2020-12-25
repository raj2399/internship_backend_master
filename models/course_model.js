var db=require('../dbconnection');
var course={
    getAllcourse(callback){
        return db.query("select * from course",callback);
    },
    insertcourse:function(item,callback)
    {
     

        return db.query("insert into course (course_duration,course_name,course_strength) values(?,?,?)",[item.course_duration,item.course_name,item.course_strength],callback);
    },
        updatecourse:function(course_id,item,callback)
    {
      //  console.log(item);
        return db.query("update course set course_duration=?,course_name=?,course_strength=? where course_id=?",[item.course_duration,item.course_name,item.course_strength,course_id],callback);
    },
    deletecourse:function(course_id,callback)
    {
      //  console.log(item);
        return db.query("delete from course where course_id=?",[course_id],callback);
    },
    getcourseByID(course_id,callback)
    {
        return db.query("select * from course where course_id=?",[course_id],callback);
    },
    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].course_id;
        }
         db.query("delete from course where course_id in (?)",[delarr],callback);
    },



}
module.exports=course;