var mysql=require('mysql');
	var connection=mysql.createPool({
 
	host:'localhost',
 	user:'root',
 	password:'bunnydon123',
 	database:'review_system_main'
 
	});
	module.exports=connection;