var mysql=require('mysql');
	var connection=mysql.createPool({
 
	host:'localhost',
 	user:'root',
 	password:'',
 	database:'review_system_main'

	});
	module.exports=connection;