var db=require('../dbconnection');
var dashboard={
    getCompanyCount(callback)
    {
        return db.query("select count(*) as companycnt from companies",callback);
    },
    getInternshipCount(callback)
    {
        return db.query("select count(*) as internshipcnt from internship",callback);
    },
    getreviewCount(callback)
    {
        return db.query("select count(*) as reviewcnt from review",callback);
    },
    getstudentCount(callback)
    {
        return db.query("select count(*) as studentcnt from student",callback);
    },
    getlatest5reviews(callback)
    {
        return ReadableStream.query("select * from review DESC by review_date limit 5",callback);
    }
};

module.exports=dashboard;
