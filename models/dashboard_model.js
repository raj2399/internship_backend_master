var db=require('../dbconnection');
var dashboard={
    getCompanyCount(callback)
    {
        return db.query("select count(*) from companies",callback);
    },
    getInternshipCount(callback)
    {
        return db.query("select count(*) from internship",callback);
    },
    getreviewCount(callback)
    {
        return db.query("select count(*) from review",callback);
    },
    getstudentCount(callback)
    {
        return db.query("select count(*) from student",callback);
    },
    getlatest5reviews(callback)
    {
        return ReadableStream.query("select * from review DESC by review_date limit 5",callback);
    }
};

module.exports=dashboard;
