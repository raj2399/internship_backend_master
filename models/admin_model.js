var db=require('../dbconnection');
var admin={
    Adminlogin(item, callback) {
        return db.query(
          "select * from admin where admin_email=? and admin_password=?",
          [item.admin_email, item.admin_password],
          callback
        );
      },
    getAllAdmin(callback){
        return db.query("select * from admin",callback);
      },
    getAdminByEmail(admin_email,callback)
    {
        return db.query("select * from admin where admin_email=?",[admin_email],callback);
    },
    addAdmin(item,callback)
    {
        return db.query("insert into admin (admin_email,admin_name,admin_password) value(?,?,?) ",[item.admin_email,item.admin_name,item.admin_password],callback);
    },
    updateAdminByEmail(admin_email,item,callback)
    {
        return db.query("update admin set admin_name=? where admin_email=?",[item.admin_name,admin_email],callback);
    }
}

module.exports=admin;
  