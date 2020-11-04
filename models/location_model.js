var db=require('../dbconnection');
var location={
    getAlllocation(callback){
        return db.query("select * from location",callback);
    },
    insertLocation:function(item,callback)
    {
        return db.query("insert into location(location_name) values(?)",[item.location_name],callback);
    },
    updatelocation:function(location_id,item,callback)
    {
        return db.query("update location set location_name=? where location_id=?",[item.location_name,location_id],callback);
    },
    deletelocation:function(location_id,callback)
    {
      //  console.log(item);
        return db.query("delete from location  where location_id=?",[location_id],callback);
    },
    getlocationByID(location_id,callback)
    {
        return db.query("select * from location where location_id=?",[location_id],callback);
    }
 



}
module.exports=location;