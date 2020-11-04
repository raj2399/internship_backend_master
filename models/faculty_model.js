var db = require("../dbconnection");

var faculty= {


    getAllFaculty(callback)
    {
     return db.query("select * from faculty",callback);
    },

  addfaculty(item,callback){
    return db.query("insert into faculty(faculty_contact_number,faculty_email_id,faculty_name) values(?,?,?) ",[item.faculty_contact_number,item.faculty_email_id,item.faculty_name],callback);
  },

  getfacultyByID(faculty_id,callback)
  {
      return db.query("select * from faculty where faculty_id=?",[faculty_id],callback);
  },

  updateFaculty(item, callback) {
    return db.query(
      "update faculty set faculty_contact_number=?,faculty_name=? where faculty_email_id=?",
      [
        item.faculty_contact_number,
        item.faculty_name,
        item.faculty_email_id
      ],
      callback
    );
  },
};

module.exports = faculty;
