var db = require("../dbconnection");

var student = {
  getAllStudnet(callback){
    return db.query("select * from student",callback);
  },
  Studentlogin(item, callback) {
    return db.query(
      "select * from student where student_email=? and student_password=?",
      [item.student_email, item.student_password],
      callback
    );
  },
  getstudentByEmail(student_email,callback)
  {
    return db.query("select c.*,s.* from course c, student s where s.course_id=c.course_id and student_email=?",[student_email],callback);
  },
  addStudent(item,callback){
    return db.query("insert into student(student_id,student_email,student_contact_no,student_name,course_id,student_password) values(?,?,?,?,?,?) ",[item.student_id,item.student_email,item.student_contact_no,item.student_name,item.course_id,item.student_password],callback);
  },
  updateStudent(item, callback) {
    return db.query(
      "update student set student_id=?,student_contact_no=?,student_name=?,course_id=? where student_email=?",
      [
        item.student_id,
        item.student_contact_no,
        item.student_name,
        item.course_id,
        item.student_email,
      ],
      callback
    );
  },
  changePassword(item, callback) {
    return db.query(
      "update student set Password=? where Email_id=?",
      [item.Password, item.Email_id],
      callback
    );
  },
};

module.exports = student;
