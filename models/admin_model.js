var db=require('../dbconnection');
var admin={
    getAdminByEmail(admin_email,callback)
    {
        return db.query("select * from admin where admin_email=?",[admin_email],callback);
    },
    addAdmin(item,callback)
    {
        return db.query("insert into admin (admin_email,admin_name) value(?,?) ",[item.admin_email,item.admin_name],callback);
    },
    updateAdminByEmail(admin_email,item,callback)
    {
        return db.query("update admin set admin_name=? where admin_email=?",[item.admin_name,admin_email],callback);
    }
}

module.exports=admin;
  