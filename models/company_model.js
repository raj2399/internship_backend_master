var db=require('../dbconnection');
var company={ 
    getAllcompany(callback){
        return db.query("select * from companies",callback);
    },
    insertcompany:function(item,callback)
    {
        return db.query("insert into companies(company_name,company_url) values(?,?)",[item.company_name,item.company_url],callback);
    },
    updatecompany:function(company_id,item,callback)
    {
        return db.query("update companies set company_name=?,company_url=? where company_id=?",[item.company_name,item.company_url,company_id],callback);
    },
    deletecompany:function(company_id,callback)
    {
      //  console.log(item);
        return db.query("delete from companies  where company_id=?",[company_id],callback);
    },
    getcompanyByID(company_id,callback)
    {
        return db.query("select * from companies where company_id=?",[company_id],callback);
    }


}
module.exports=company;